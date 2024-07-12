import Google from "next-auth/providers/google"
import Facebook from 'next-auth/providers/facebook'
import connectDB from "../../../server/libs/Mongodb"
import { User } from '../../../server/models/users'
import Credentials from "next-auth/providers/credentials"
import bcrypt from 'bcrypt'


export const authOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),

    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' }
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        await connectDB();
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error('No user found with the email');
        }
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
          throw new Error('Invalid password');
        }
        return { id: user._id, name: user.name, email: user.email };
      }
    })
  ],

  callbacks: {
    async signIn({ user, account, profile }) {
      //console.log(user, account, profile)

      if (account.provider === 'google') {
        try {
          await connectDB()
          const user = await User.findOne({ email: profile.email })
          if (!user) {
            const newUser = new User({
              email: profile.email,
              name: profile.name,
              image: profile.image,
            })
            await newUser.save()
          }
        } catch (err) {
          console.log(err)
          return false
        }
      }
      if (account.provider === 'facebook') {
        try {
          await connectDB()
          const user2 = await User.findOne({ email: profile.email })
          if (!user2) {
            const newUser = new User({
              email: user.email,
              name: user.name,
              image: user.image,
            })
            await newUser.save()
          }
        } catch (err) {
          console.log(err)
          return false
        }
      }
      return true
    },
  }

}