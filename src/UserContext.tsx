import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type User = {
  username: string;
  gender: string;
};

const UserContext = createContext<User | null>(null);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Replace this with real API call
    const fetchUser = async () => {
      // Simulate API response
      const userData = {
        username: 'john1101',
        gender: 'm',
      };
      setUser(userData);
    };

    fetchUser();
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
