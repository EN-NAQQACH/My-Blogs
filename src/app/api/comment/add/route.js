import {Comment} from "../../../../../server/models/Comment";
import {Blog} from "../../../../../server/models/Blog";
import connectDB from "../../../../../server/libs/Mongodb";
import { NextResponse } from "next/server";


export const POST = async (req) => {

    const {blog_id, blog_author,comment, commented_by} = await req.json();
    try {
        await connectDB();
        const newComment = new Comment({
            blog_id,
            blog_author,
            comment,
            commented_by
        });
        await newComment.save().then(commentFile => {
            let {comment,children} = commentFile;
            Blog.findByIdAndUpdate({_id:blog_id},{$push:{"comments":commentFile._id}
                , $inc: { "activity.total_comments": 1 }, "activity.total_parent_comments": 1
            
            }).then(
                blog => {
                    console.log("new comment created");
                }
            )
        })
        return NextResponse.json({newComment}, {status: 200});
    } catch (error) {
        return NextResponse.json({message: "Error adding comment"}, {status: 500});
    }
}