import mongoose, { Schema } from "mongoose";

const commentSchema = mongoose.Schema({
    blog_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Blog'
    },
    blog_author: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Blog',
    },
    comment: {
        type: String,
        required: true
    },
    children: {
        type: [Schema.Types.ObjectId],
        ref: 'Comment'
    },
    commented_by: {
        type: Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    },
    isReply: {
        type: Boolean,
    },
    parent: {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export const Comment = mongoose.models?.Comment || mongoose.model("Comment", commentSchema);