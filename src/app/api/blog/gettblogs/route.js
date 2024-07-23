import {Blog} from "../../../../../server/models/Blog";
import { User } from "../../../../../server/models/User";
import connectDB from "../../../../../server/libs/Mongodb";
import { NextResponse } from "next/server";

// Function to get blogs for a specific user
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  //cast userId to string
  const userId = searchParams.get('userId');
  try {
    await connectDB();
    const blogs = await Blog.find({ author: userId }).populate({
      path: 'author',
      select: 'username image' // Only include the fields you want
    });
    return NextResponse.json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
};