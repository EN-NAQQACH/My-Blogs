import { User } from "../../../../../server/models/User";
import { Blog } from "../../../../../server/models/Blog";
import connectDB from "../../../../../server/libs/Mongodb";
import { NextResponse } from "next/server";
import { create } from "domain";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId');

  if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  try {
      await connectDB();
      const user = await User.findById(userId).populate('blogs');
      if (!user) {
          return NextResponse.json({ error: "User not found" }, { status: 404 });
      }
    
      const blogIds = user.blogs.map(blog => blog._id);
      const blogs = await Blog.find({ _id: { $in: blogIds } });
      return NextResponse.json(user, { status: 200 });
  } catch (error) {
      console.error("Error fetching blogs:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
};