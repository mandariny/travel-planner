import classes from './HeaderLogo.module.css'

const HeaderLogo = (props) => {
    return (
        <>
            <div className={classes.header__logo} onClick={() => {window.location.reload();}}>
                Travel Planner
            </div>
            
        </>  
    )
}

export default HeaderLogo;