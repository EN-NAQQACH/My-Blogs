import Google from "next-auth/providers/google"
import Facebook from 'next-auth/providers/facebook'
import connectDB from "../../../server/libs/Mongodb"

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
  ], 

  callbacks: {
     async signIn(user, account, profile) {
      console.log(user, account, profile)
        // do just connecting to mongodb
        await connectDB()
        return true
    },
    }
  
}