import MenuItem from "./menuItem";
import '../Tree_View/TreeView.css';
const MenuList = ({ list = [] }) => {
  return (
    <ul className="menuListContainer">
      {list && list.length
        ? list.map((listItem) => <MenuItem item={listItem} />)
        : null}
    </ul>
  );
};

export default MenuList;
