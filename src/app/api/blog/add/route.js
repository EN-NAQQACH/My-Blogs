import {Blog} from "../../../../../server/models/Blog";
import {User} from "../../../../../server/models/User";
import connectDB from "../../../../../server/libs/Mongodb";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId');
  try {
    await connectDB();
    const user = await User.findById(userId);
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
    user.blogs.push(newBlog._id);
    await user.save();
    return NextResponse.json(newBlog);
  } catch (error) {
    console.error("Error adding blog:", error);
    return NextResponse.json({ message: "Error adding blog", error: error.message }, { status: 500 });
  }
}