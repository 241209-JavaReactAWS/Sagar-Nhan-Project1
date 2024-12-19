import React, { createContext, useState } from 'react';

export interface AuthContextType {
  username: string;
  setUsername: (username: string) => void;
  role: 'unauthenticated' | 'USER' | 'ADMIN';
  setRole: (role: 'unauthenticated' | 'USER' | 'ADMIN') => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [username, setUsername] = useState<string>('');
  const [role, setRole] = useState<'unauthenticated' | 'USER' | 'ADMIN'>('unauthenticated');

  return (
    <AuthContext.Provider value={{ username, setUsername, role, setRole }}>
      {children}
    </AuthContext.Provider>
  );
};
