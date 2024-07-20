import { User } from "../../../../../server/models/users";
import connectDB from "../../../../../server/libs/Mongodb";
import { NextResponse } from "next/server";

// update user's info
export const PUT = async (req) => {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');
    const { name,image, email,username, bio, facebook, twitter, instagram } = await req.json();
    try {
        await connectDB();
        const user = await User.findByIdAndUpdate(userId,
            {
                name,
                email,
                username,
                bio,
                image, 
                socialLinks: {
                    facebook: facebook,
                    twitter: twitter,
                    instagram: instagram
                }
            }, { new: true });
        return NextResponse.json(user);
    } catch (error) {
        console.error("Error updating user:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
};