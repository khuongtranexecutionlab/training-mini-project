import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../../database/mongdb";
import Product from "../../../../../models/product";

connectDB();

export interface IProduct {
  name: FormDataEntryValue | null | string;
  price: FormDataEntryValue | null | number;
  category: FormDataEntryValue | null | string;
}

export async function GET(
  _: NextRequest,
  route: { params: { detail: string } }
) {
  try {
    const product = await Product.findOne({
      slug: route.params.detail,
    });
    if (!product)
      return NextResponse.json({ status: 400, data: "Product Not Found" });
    return NextResponse.json({ status: 200, data: product });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ status: 500, message: error.message });
    }
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const id = req.body;

    await Product.findByIdAndDelete(id);
    return NextResponse.json({ message: "DELETED SUCCESS" });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ status: 500, message: error.message });
    }
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
