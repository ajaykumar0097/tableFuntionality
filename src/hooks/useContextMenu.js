// useContextMenu.js
import { useState, useCallback } from 'react';

const useContextMenu = () => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [subCalcData, setSubCalcData] = useState(null); // Store selected Subcalc data

  const showMenu = useCallback((event, data) => {
    event.preventDefault();
    setPosition({ x: event.clientX, y: event.clientY });
    setVisible(true);
    setSubCalcData(data); // Set the data for the selected row
  }, []);

  const hideMenu = useCallback(() => {
    setVisible(false);
  }, []);

  return {
    visible,
    position,
    subCalcData,
    showMenu,
    hideMenu,
  };
};

export default useContextMenu;
