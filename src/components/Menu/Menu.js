import React from 'react';
import MenuItems from './MenuItems/MenuItems';
import Logo from './Logo/Logo';

const menuData = ["Main", "Cafes", "Chaikhanas", "Restaurants", "Hotels"];
const Menu = () => {
  return (
    <div className="Menu">
      <Logo />
      <MenuItems menuItems={menuData}/>
    </div>
  );
};

export default Menu;