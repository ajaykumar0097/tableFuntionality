import { useState } from 'react';

const useContextMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [menuRow, setMenuRow] = useState(null);

  const handleContextMenu = (event, row) => {
    event.preventDefault();
    setMenuPosition({ x: event.pageX, y: event.pageY });
    setMenuRow(row);
    setMenuVisible(true);
  };

  const hideContextMenu = () => {
    setMenuVisible(false);
  };

  return {
    menuVisible,
    menuPosition,
    handleContextMenu,
    hideContextMenu,
    menuRow,
  };
};

export default useContextMenu;
