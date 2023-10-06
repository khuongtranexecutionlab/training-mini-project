import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../database/mongdb";
import Category from "../../../../models/category";

connectDB();

export async function POST(req: NextRequest) {
  try {
    const newCategory = new Category(await req.json());
    await newCategory.save();
    return NextResponse.json({
      data: { ...newCategory.toObject(), _id: newCategory._id.toString() },
      status: 200,
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ status: 500, message: error.message });
    }
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function GET() {
  try {
    const categories = await Category.find();

    return NextResponse.json({
      status: 200,
      data: categories,
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ status: 500, message: error.message });
    }
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
