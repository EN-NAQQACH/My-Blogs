import { Comment } from "../../../../../server/models/Comment";
import { Blog } from "../../../../../server/models/Blog";
import connectDB from "../../../../../server/libs/Mongodb";
import { NextResponse } from "next/server";


export const POST = async (req) => {

    const { blog_id, blog_author, comment, commented_by, replyTo } = await req.json();
    console.log("replyto", replyTo);
    try {
        await connectDB();

        // Create a new comment object
        const newComment = {
            blog_id,
            blog_author,
            comment,
            commented_by,
            parent: replyTo ? replyTo : undefined
        };

        const commentFile = await new Comment(newComment).save();
        await Blog.findByIdAndUpdate(
            blog_id,
            {
                $push: { comments: commentFile._id },
                $inc: { "activity.total_comments": 1 },
                $set: { "activity.total_parent_comments": replyTo ? 0 : 1 }
            }
        );
        // If replyTo exists, update the parent comment's children array
        if (replyTo) {
            await Comment.findByIdAndUpdate(
                replyTo,
                { $push: { children: commentFile._id } }
            );
            console.log("Parent comment updated");
        }

        return NextResponse.json({ newComment }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error adding comment" }, { status: 500 });
    }
}