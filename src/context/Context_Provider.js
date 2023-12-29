// ** React Imports
import { createContext, useEffect, useState } from "react";
import { redirect } from "react-router-dom";

// ** Defaults
const defaultProvider = {
  user: null,
  setUser: () => null,
  isModal: false,
  setIsModal: () => Boolean,
  handleRedirect: (path) => {},
};
const Context = createContext(defaultProvider);

const ContextProvider = ({ children }) => {
  // ** States
  const [user, setUser] = useState(defaultProvider.user);
  const [isModal, setIsModal] = useState(defaultProvider.isModal);
  const [loading, setLoading] = useState(defaultProvider.loading);

  useEffect(() => {
    // const initAuth = async () => {
    // };
    // initAuth();
  }, []);

  const handleRedirect = (path) => {
    console.log("Redireact: ", path);
    // window.location.href = path;
    redirect(path);
  };

  const values = {
    loading,
    setLoading,
    user,
    setUser,
    isModal,
    setIsModal,
    handleRedirect,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export { Context, ContextProvider };
