import { Comment } from "../../../../../server/models/Comment";
import { User } from "../../../../../server/models/User";
import connectDB from "../../../../../server/libs/Mongodb";
import { NextResponse } from "next/server";

// get all comments
export const GET = async (req) => {
    try {
        const { searchParams } = new URL(req.url);
        const blog_id = searchParams.get('blog_id');
        await connectDB();
       const comments = await Comment.find({ blog_id })
            .populate('commented_by', 'username image')
            .populate({
                path: 'children',
                populate: {
                    path: 'commented_by',
                    select: 'username image'
                }
            });
        return NextResponse.json({ comments });
    } catch (e) {
        console.log(e);
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
}