import {Blog} from "../../../../../server/models/Blogs";
import connectDB from "../../../../../server/libs/Mongodb";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await connectDB();
    const { title, description, banner, author,content,tags } = await req.json();
    const newBlog = new Blog({
      title,
      description,
      banner,
      author,
      content,
      tags
    });
    await newBlog.save();
    return NextResponse.json(newBlog);
  } catch (error) {
    console.error("Error adding blog:", error);
    return NextResponse.json({ message: "Error adding blog", error: error.message }, { status: 500 });
  }
}