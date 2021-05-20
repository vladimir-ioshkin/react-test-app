import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={classes.navigation}>
            <ul>
                <li className={`${classes.item} ${classes.active}`}>
                    <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="#" activeClassName={classes.active}>Music</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="#" activeClassName={classes.active}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar