import React, { useState } from "react";
import MenuList from "./menuList";
import '../Tree_View/TreeView.css';
const TreeView = ({ menus = [] }) => {
  return <div className="treeViewContainer">
    <MenuList list={menus} />
  </div>;

};

export default TreeView;
