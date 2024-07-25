import {Blog} from "../../../../../server/models/Blog";
import { User } from "../../../../../server/models/User";
import connectDB from "../../../../../server/libs/Mongodb";
import { NextResponse } from "next/server";

// Function to get blogs for a specific user
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const blogid = searchParams.get('id');
  try {
    await connectDB();
    const blog = await Blog.findOne({ _id: blogid }).populate({
      path: 'author',
      select: 'username image'
    })
    return NextResponse.json(blog);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
};