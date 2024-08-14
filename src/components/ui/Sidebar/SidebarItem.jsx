// Reusable component for individual items in the sidebar
import { useState } from "react";
import Dropdown from "./Dropdown";
import "./Sidebar.css";

const SidebarItem = ({ nav }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    return (
        <li className={`nav-item ${nav.children ? "has-dropdown" : ""}`}>
            <a className="nav-link collapsed" href="#" onClick={nav.children ? toggleDropdown : null}>
              <i className={nav.icon}></i>
              <span>{nav.name}</span>
            </a>

            {/* dropdown */}
            {nav.children && isOpen && (
                <Dropdown children={nav.children}/>
            )}
        </li>
    )
}

export default SidebarItem;