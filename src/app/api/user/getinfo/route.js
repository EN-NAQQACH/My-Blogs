import { User } from "../../../../../server/models/users";
import connectDB from "../../../../../server/libs/Mongodb";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');
  
    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }
  
    try {
      await connectDB();
      const user = await User.findById(userId);
      if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }
      return NextResponse.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
  };