import React, { useEffect, useContext, useState } from 'react';
import './index.css';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([]);
  const accessKey = process.env.REACT_APP_ACCESSKEY;
  const url = `https://api.unsplash.com/photos/random?client_id=${accessKey}&&count=10&&query=${searchTerm}`;

  const fetchImages = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.errors) {
        setError(data.errors);
      } else {
        setImages(data);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
    return () => {
      setError('');
    };
  }, [searchTerm]);

  return (
    <AppContext.Provider value={{ loading, setSearchTerm, images, error }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
