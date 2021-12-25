import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <NavLink to="/">Financial Planning</NavLink>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/dashboard" activeClassName={classes.active}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/advise" activeClassName={classes.active}>Advise</NavLink>
          </li>
          <li>
            <NavLink to="/transaction" activeClassName={classes.active}>Transactions</NavLink>
          </li>
          <li>
            <NavLink to="/services" activeClassName={classes.active}>Services</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName={classes.active}>About Us</NavLink>
          </li>
          <li>
            <NavLink to="/user" activeClassName={classes.active}>Profile</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
