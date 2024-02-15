import LoginButton from "./login/LoginJoinButton"
import MyPageButton from "./MyPageButton"
import LogoutButton from "./login/LogoutButton"
import classes from './HeaderButton.module.css'

const HeaderButton = () => {
    return(
        <div className={classes.box}>
            {/* 로그인 여부 확인 */}
            { (sessionStorage.getItem('USER') !== null) ? (
                <>
                    {/* 로그인이 된 경우 */}
                    <MyPageButton />
                    <LogoutButton />
                </>
            ) : (
                <>
                    {/* 로그인이 안된 경우 */}
                    <LoginButton />
                </>
            ) }
        </div>
    )
}

export default HeaderButton