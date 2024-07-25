import {Blog} from "../../../../../server/models/Blog";
import {User} from "../../../../../server/models/User";
import connectDB from "../../../../../server/libs/Mongodb";
import { NextResponse } from "next/server";

// update blog 
export const PUT = async (req) => {
  const { searchParams } = new URL(req.url);
  const blogId = searchParams.get('id');
  try {
    await connectDB();
    const { title, description, banner, content,tags } = await req.json();
    const blog = await Blog.findByIdAndUpdate(blogId, {
      title,
      description,
      banner,
      content,
      tags
    }, { new: true });
    return NextResponse.json({ blog });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};