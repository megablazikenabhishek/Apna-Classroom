import "./sidebar-option.css";
import { Link } from "react-router-dom";
const SidebarOption = ({ option, isActive }) => {
  const classList = isActive ? "sidebar-option active" : "sidebar-option";
  return (
    <Link className={classList} to={`/${option.route}`}>
      <div className="sidebar-icon">{option.icon}</div>
      {option.name && <label className="sidebar-label">{option.name}</label>}
    </Link>
  );
};

export default SidebarOption;
