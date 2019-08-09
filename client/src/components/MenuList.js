import React from 'react';
import MenuItem from './MenuItem';

function MenuList({ menu }) {
  return (
    <div className="grid-view ">
      {menu.map((item, index) => {
        return <MenuItem item={item} key={index}/>
      })}
    </div>
  )
}

export default MenuList;