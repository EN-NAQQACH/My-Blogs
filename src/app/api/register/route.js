import connectDB from "../../../../server/libs/Mongodb"
import { User } from '../../../../server/models/users'
import bcrypt from 'bcrypt'
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function POST(request) {
    const { email, password } = await request.json();

    if (!email || !password) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await connectDB();
    
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
        email,
        password: hashedPassword,
    });

    await user.save();

    return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
}