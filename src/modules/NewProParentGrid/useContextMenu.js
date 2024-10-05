// useContextMenu.js
import { useEffect, useState } from 'react';

const useContextMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [menuRow, setMenuRow] = useState(null);

  const handleContextMenu = (e, row) => {
    e.preventDefault();
    setMenuPosition({ x: e.pageX, y: e.pageY });
    setMenuRow(row);
    setMenuVisible(true);
  };

  const hideContextMenu = () => {
    setMenuVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const contextMenu = document.querySelector('.context-menu');
      if (contextMenu && !contextMenu.contains(event.target)) {
        hideContextMenu();
      }
    };

    // Attach event listener to detect clicks outside the menu
    document.addEventListener('click', handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return {
    menuVisible,
    menuPosition,
    handleContextMenu,
    hideContextMenu,
    menuRow,
  };
};

export default useContextMenu;
