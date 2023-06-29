import React from 'react'

const CartContext = React.createContext({
  isDarkTheme: false,
  activeTab: 'Home',
  onToggleDarkTheme: () => {},
  onChangeActiveTabItem: () => {},
  addToSaveVideos: () => {},
  removeSaveVideos: () => {},
})
export default CartContext
