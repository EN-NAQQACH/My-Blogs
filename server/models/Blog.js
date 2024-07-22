import mongoose, { Schema } from "mongoose";

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    banner: {
        type: String,
        // required: true,
    },
    description: {
        type: String,
        maxlength: 200,
        // required: true
    },
    content: {
        type: [],
    },
    tags: {
        type: [String],
    },
    author: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    activity: {
        total_comments: {
            type: Number,
            default: 0
        },

        total_parent_comments: {
            type: Number,
            default: 0
        },
    },
    comments: {
        type: [Schema.Types.ObjectId],
        ref: 'Comment',
    },
    created_at: {
        type: Date,
        default: Date.now
    }
},
)
export const Blog = mongoose.models?.Blog || mongoose.model("Blog", blogSchema);