import {Blog} from "../../../../../server/models/Blog";
import { User } from "../../../../../server/models/User";
import connectDB from "../../../../../server/libs/Mongodb";
import { NextResponse } from "next/server";

// Function to get blogs for a specific user
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  //cast userId to string 
  const userId = searchParams.get('userId');
  const search = searchParams.get('search') || '';
  try {
    await connectDB();
    const query = {
      author: userId,
      $or: [
        { title: { $regex: search, $options: 'i' } }, // Search in the title field
        { content: { $regex: search, $options: 'i' } } // Optionally search in the content field
      ]
    };
    const blogs = await Blog.find(query).populate({
      path: 'author',
      select: 'username image'
    });
    return NextResponse.json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
};