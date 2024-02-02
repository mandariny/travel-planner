import HeaderLogo from "./logo/HeaderLogo";
import classes from "./Header.module.css"
import HeaderButton from "./HeaderButton";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div  className={classes.header__content}>
                <HeaderLogo/>
                <HeaderButton/>
            </div>
        </header>
    )
}

export default Header;