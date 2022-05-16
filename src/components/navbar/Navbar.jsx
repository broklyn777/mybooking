import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">GranitBooking</span>
        <div className="navItems">
          <button className="navButton">Skapa konto</button>
          <button className="navButton">Logga in</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
