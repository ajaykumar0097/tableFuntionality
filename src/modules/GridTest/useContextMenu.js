// src/useContextMenu.js
import { useState } from 'react';
import './style.css'


const useContextMenu = (modalData) => {
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState([]);

  const handleContextMenu = (event, rowData) => {
    event.preventDefault();
    setIsVisible(true);
    setData(rowData);
  };

  const closeContextMenu = () => {
    setIsVisible(false);
  };

  return { isVisible, handleContextMenu, closeContextMenu, data };
};

export default useContextMenu;
