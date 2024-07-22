
import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    name: { type: String },
    email: { type: String, required: true },
    password: {
        type: String,
      },
    username: {
        type: String,
    },
    bio: {
        type: String,
    },
    image: {
        type: String,

    },
    socialLinks: {
        facebook: {
            type: String,
        },
        twitter: {
            type: String,
        },
        instagram: {
            type: String,
        },
    },
    blogs: {
        type: [Schema.Types.ObjectId],
        ref: 'Blog',
        default: [],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
export const User = mongoose.models?.User || mongoose.model("User", userSchema);