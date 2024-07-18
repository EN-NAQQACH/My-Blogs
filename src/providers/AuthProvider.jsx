// providers/AuthProvider.js
"use client";
import React from 'react';
import { SessionProvider } from 'next-auth/react';
import SessionHandler from './SessionHandler';

const AuthProvider = ({ children }) => {
  return (
    <SessionProvider>
      <SessionHandler>
        {children}
      </SessionHandler>
    </SessionProvider>
  );
};

export default AuthProvider;
