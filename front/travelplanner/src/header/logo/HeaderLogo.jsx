import { Link } from 'react-router-dom';
import classes from './HeaderLogo.module.css'

const HeaderLogo = (props) => {
    return (
        <>
            <div className={classes.header__logo} onClick={() => {window.location.reload();}}>
                <Link to="/" className={classes.header__logo}>Travel Planner</Link>
            </div>
            
        </>  
    )
}

export default HeaderLogo;