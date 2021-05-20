import logo from '../../logo.png';
// import './Header.module.css';
import classes from './Header.module.css';

const Header = () => {
    return <header className={classes.header}>
        <img className={classes['header-logo']} src={logo}></img>
    </header>
}

export default Header