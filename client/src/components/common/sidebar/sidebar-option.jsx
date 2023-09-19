import "./sidebar-option.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const SidebarOption = ({ option, isActive }) => {
  const navigate = useNavigate();
  const classList = isActive ? "sidebar-option active" : "sidebar-option";
  return (
    <div className={classList}>
      <div className="sidebar-icon">{option.icon}</div>
      {option.name && <label className="sidebar-label">{option.name}</label>}
    </div>
  );
};

export default SidebarOption;
