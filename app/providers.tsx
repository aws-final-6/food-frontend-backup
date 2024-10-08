"use client";

import React, {
  createContext,
  useState,
  useCallback,
  ReactNode,
  useEffect,
} from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

interface UserData {
  id: string;
  email: string;
  nickname: string;
  provider: string;
  refreshToken: string;
  accessToken: string;
  favorite: number[];
}

interface UserContextType {
  userData: UserData[];
  setUserData: (data: UserData[]) => void;
  clearUserData: () => void;
  isUserDataEmpty: () => boolean;
  updateProvider: (newProvider: string) => void;
  updateUserData: (newData: Partial<UserData>) => void;
  addFavorite: (item: number) => void;
  removeFavorite: (item: number) => void;
}

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export const UserContext = createContext<UserContextType>({
  userData: [],
  setUserData: () => [],
  isUserDataEmpty: () => false,
  clearUserData: () => [],
  updateProvider: () => [],
  updateUserData: () => [],
  addFavorite: () => [],
  removeFavorite: () => [],
});

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  // Initialize state from localStorage if available and only on the client-side
  const [userData, setUserData] = useState<UserData[]>(() => {
    if (typeof window !== "undefined") {
      const localData = localStorage.getItem("userData");
      return localData ? JSON.parse(localData) : [];
    }
    return []; // Return empty array if not running in the browser
  });
  const [isInitialized, setIsInitialized] = useState(false);

  // Use useEffect to update localStorage when userData changes, but only on the client-side
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("userData", JSON.stringify(userData));
      setIsInitialized(true);
    }
  }, [userData]);

  const isUserDataEmpty = useCallback(() => userData.length === 0, [userData]);

  const clearUserData = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("userData");
      setUserData([]);
    }
  };

  const updateProvider = (newProvider: string) => {
    if (userData.length > 0) {
      const updatedData = [...userData];
      updatedData[0].provider = newProvider;
      setUserData(updatedData);
    }
  };

  const updateUserData = (newData: Partial<UserData>) => {
    if (userData.length > 0) {
      const updatedData = { ...userData[0], ...newData };
      setUserData([updatedData]);
    } else {
      setUserData([{ ...newData } as UserData]);
    }
  };

  const addFavorite = (item: number) => {
    if (userData.length > 0) {
      const updatedData = [...userData];
      if (!Array.isArray(updatedData[0].favorite)) {
        updatedData[0].favorite = []; // Initialize favorite if it's not an array
      }
      updatedData[0].favorite.push(item);
      setUserData(updatedData);
    }
  };
  const removeFavorite = (item: number) => {
    if (userData.length > 0) {
      const updatedData = [...userData];
      updatedData[0].favorite = updatedData[0].favorite.filter(
        (fav) => fav !== item
      );
      setUserData(updatedData);
    }
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        isUserDataEmpty,
        clearUserData,
        updateProvider,
        updateUserData,
        removeFavorite,
        addFavorite,
      }}
    >
      {isInitialized ? children : null}
    </UserContext.Provider>
  );
};

export function UIProvider({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </NextUIProvider>
  );
}
