import { Link } from 'react-router-dom';
import classes from '../HeaderButton.module.css'

const LogoutButton = () => {
    return (
        <>
            <div onClick={() => {
                sessionStorage.removeItem('USER')

                window.location.reload();
            }}>
                <Link to="/" className={classes.my}>로그아웃</Link>
            </div>
            
        </>
    )
}

export default LogoutButton