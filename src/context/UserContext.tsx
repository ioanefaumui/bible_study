import {
  GoogleAuthProvider,
  User,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";

interface IUserContext {
  user: User | null;
  loadingUser: boolean;
  loginWithGoogle: () => void;
  logOut: () => void;
}

const INITIAL_USER_CONTEXT: IUserContext = {
  user: null,
  loadingUser: true,
  loginWithGoogle: () => {},
  logOut: () => {},
};

export const UserContext = createContext<IUserContext>(INITIAL_USER_CONTEXT);

export function UserContextProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<IUserContext["user"]>(null);
  const [loadingUser, setLoadingUser] = useState<IUserContext["loadingUser"]>(true);

  const loginWithGoogle: IUserContext["loginWithGoogle"] = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoadingUser(false);
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [user]);

  const value = {
    user,
    loadingUser,
    loginWithGoogle,
    logOut,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
