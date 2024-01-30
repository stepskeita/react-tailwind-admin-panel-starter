import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
const CustomSidebar = () => {
  return (
    <div className="bg-white">
      <Sidebar>
        <Menu>
          <MenuItem> Dashboard </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default CustomSidebar;
