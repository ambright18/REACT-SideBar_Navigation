import "./App.css";
import TreeView from "./components/Tree_View/TreeView";
import menus from "./components/Tree_View/data";
function App() {
  return (
    <>
    <TreeView menus={menus} />
    </>
  );
}

export default App;
