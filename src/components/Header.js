/** @format */

const Header = (props) => {
  return (
    <div className="navbar-fixed">
      <nav className="teal lighten-2">
        <div className="nav-wrapper">
          <div className="brand-log center">Bloco de notas {props.name}</div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
