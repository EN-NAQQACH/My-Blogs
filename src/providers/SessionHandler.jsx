// providers/SessionHandler.js
"use client";
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useDispatch } from 'react-redux';
import { setUser } from '../app/store/UserSlice';

const SessionHandler = ({ children }) => {
  const { data: session, status } = useSession();
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'authenticated' && session?.user) {
      dispatch(setUser({
        email: session.user.email,
        // Add other user properties here if needed
        // name: session.user.name,
        // username: session.user.username,
        // bio: session.user.bio,
        // image: session.user.image,
        // socialLinks: session.user.socialLinks,
        // blogs: session.user.blogs,
        // createdAt: session.user.createdAt,
      }));
    }
  }, [session, status, dispatch]);


  return <>{children}</>;
};

export default SessionHandler;
