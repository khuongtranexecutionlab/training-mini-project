import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../database/mongdb";
import Product from "../../../../models/product";

connectDB();

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const isHighLight = searchParams.get("highlight");

    const search = searchParams.get("search") || "";
    const sort = searchParams.get("sort") || "createdAt";

    const limit = Number(searchParams.get("limit"));
    const page = Number(searchParams.get("page"));

    const query = search
      ? { name: { $regex: search } }
      : isHighLight
      ? { isHighlight: true }
      : {};

    let productQuery = Product.find(query).sort(sort);
    let totalPage;

    if (search || limit || page) {
      productQuery = productQuery.limit(limit).skip(limit * (page ?? 1 - 1));

      totalPage = Math.ceil((await Product.find(query).count()) / limit);
    }

    const products = await productQuery.exec();

    if (products.length === 0) {
      return NextResponse.json({ status: 400, message: "Product not found" });
    }

    const responseData = products.map((pr) => ({
      ...pr.toObject(),
      _id: pr._id.toString(),
    }));

    return NextResponse.json({
      status: 200,
      totalPage: limit ? totalPage : 1,
      data: responseData,
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ status: 500, message: error.message });
    }
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const requestData = await req.json();
    const slug = convertToSlug(requestData.name);
    const newProduct = new Product({ ...requestData, slug });
    await newProduct.save();
    return NextResponse.json({
      data: { ...newProduct.toObject(), _id: newProduct._id.toString() },
      status: 200,
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ status: 500, message: error.message });
    }
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

function convertToSlug(text: string) {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9-]+/g, "");
}
