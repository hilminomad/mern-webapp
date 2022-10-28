import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState([]);
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

  /*useEffect(() => {
        console.log(pathname);
    },[pathname])*/

  const controlSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        setIsSidebarOpen,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isModalOpen,
        openModal,
        closeModal,
        controlSidebar,
        products,
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
