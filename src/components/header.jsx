import logo from "../assets/logo.svg";

const Header = () => (
  <header className="relative top-0 left-0 right-0 h-20 bg-white shadow-[0px_93px_37px_rgba(0,0,0,0.01),0px_52px_31px_rgba(0,0,0,0.02),0px_23px_23px_rgba(0,0,0,0.04),0px_6px_13px_rgba(0,0,0,0.05)]">
    <div
      className="absolute"
      style={{ left: "9.46%", right: "76.79%", top: "0.8%", bottom: "97.6%" }}
    >
      <img src={logo} alt="Logo" className="w-auto h-16" />{" "}
      {/* Adjust width and height as needed */}
    </div>
    <nav
      className="absolute h-20"
      style={{ left: "579px", right: "580px", top: "0px" }}
    >
      <ul className="flex items-center h-full space-x-8">
        <li>
          <a href="#" className="text-gray-800 hover:text-gray-600">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-800 hover:text-gray-600">
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-800 hover:text-gray-600">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-800 hover:text-gray-600">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
