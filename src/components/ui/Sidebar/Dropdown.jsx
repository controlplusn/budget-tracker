import "./Sidebar.css";

const Dropdown = ({ children }) => {
    if (!children || children.length === 0) {
        return null;
    }

    return (
        <ul className="dropdown-menu">
            {children.map(child => (
                <li key={child._id} className="nav-item">
                    <a href="#" className="nav-link">
                        {child.icon && <i className="nav-icon">{child.icon}</i>}
                        <span>{child.name}</span>
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Dropdown;