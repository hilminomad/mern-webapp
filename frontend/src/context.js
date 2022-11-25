import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({ name: '', email: '' });

  // function to to GET ALL products from the api

  useEffect(() => {
    try {
      const fetchData = async () => {
        const { data } = await axios.get('/api/v1/products');
        setProducts(data);
      };
      fetchData();
    } catch (error) {
      console.log('products did not load');
    }
  }, []);

  // sidebar functionality

  const controlSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        setIsSidebarOpen,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        controlSidebar,
        products,
        loggedIn,
        setLoggedIn,
        user,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
