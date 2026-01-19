'use client';

import React, { createContext, useContext, useMemo } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const { data: session, status } = useSession();

  const value = useMemo(
    () => ({
      user: session?.user || null,
      loading: status === 'loading',
      error: null,
      signInWithCredentials: async (email, password) => {
        const result = await signIn('credentials', {
          email,
          password,
          redirect: false,
        });

        if (result?.error) {
          throw new Error(result.error);
        }

        return result;
      },
      logout: () => signOut({ redirect: false }),
    }),
    [session, status]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
