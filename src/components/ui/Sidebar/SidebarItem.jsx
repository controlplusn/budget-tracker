// Reusable component for individual items in the sidebar
import "./Sidebar.css";

const SidebarItem = ({ nav }) => {
    return (
        <li className="nav-item">
            <a className="nav-link collapsed" href="#">
              <i className={nav.icon}></i>
              <span>{nav.name}</span>
            </a>
        </li>
    )
}

export default SidebarItem;