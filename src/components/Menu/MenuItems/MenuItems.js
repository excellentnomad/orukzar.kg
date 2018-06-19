import React from "react";
import MenuItem from './MenuItem/MenuItem';

const MenuItems = (props) => {
    const menuItems = props.menuItems.map((menuItem, i) => (
        <MenuItem key={menuItem + i} menuName={menuItem} />
    ));
    return (
        <ul>
            {menuItems}
        </ul>
    );
};

export default MenuItems;