import "./sidebarOption.css";
const SidebarOption = ({ title, Icon, onClick }) => {
  return (
    <div className="sidebar-option" onClick={onClick}>
      {Icon && <Icon className="sidebar-option__icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
};

export default SidebarOption;
