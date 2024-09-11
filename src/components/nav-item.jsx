const NavItem = ({ children }) => {
  return (
    <li
      className="absolute flex items-center justify-center"
      style={{
        left: "74.5%",
        right: "2.83%",
        top: "0%",
        bottom: "0%",
        padding: "24px 12px",
        gap: "12px",
      }}
    >
      <a href="#" className="text-gray-800 hover:text-gray-600">
        {children}
      </a>
    </li>
  );
};

export default NavItem;
