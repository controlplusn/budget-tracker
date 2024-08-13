// Main sidebar component
import "./Sidebar.css";
import navList from "../../../data/navItem";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
    return (
      <div id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          {navList.map(nav => (
            <SidebarItem key={nav._id} nav={nav}/>
          ))}
        </ul>
      </div>
    )
}

export default Sidebar;