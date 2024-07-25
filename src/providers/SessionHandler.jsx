// providers/SessionHandler.js
"use client";
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useDispatch,useSelector  } from 'react-redux';
import { setUser } from '../app/store/UserSlice';

const SessionHandler = ({ children }) => {
  const { data: session, status } = useSession();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);


  const getUserInfo = async () => {
    if (session?.user.id && !user.id) {
      try {
        const res = await fetch(`/api/user/getinfo?userId=${session.user.id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await res.json();
        if (res.ok) {
          dispatch(setUser(data)); // Dispatch setUser with fetched user data
          localStorage.setItem('user', JSON.stringify(data));
        } else {
          console.error(data);
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    }
  };
  useEffect(() => {
    if (status === 'authenticated' && !user.id) {
        getUserInfo();
    }
  }, [session, status, dispatch, user.id]);

  useEffect(() => {
    if (user.id) {
      localStorage.setItem('user', JSON.stringify(user)); // Update local storage when user info changes
    }
  }, [user]);


  return <>{children}</>;
};

export default SessionHandler;
