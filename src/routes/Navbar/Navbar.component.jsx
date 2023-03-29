import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as Logosvg} from '../../assets/083crown.svg';
import './Navbar.styles.scss'

const Navbar = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logosvg />
        </Link>

        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">Shop</Link>
          <Link to="/auth" className="nav-link">SIGN IN</Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
