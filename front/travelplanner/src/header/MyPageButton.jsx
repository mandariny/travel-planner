import { Link } from "react-router-dom"
import classes from './HeaderButton.module.css'

const MyPageButton = () => {
    return (
        <>
            <Link to="/mypage" className={classes.my}>
            <div>
                마이페이지
            </div>
        </Link>
        </>
    )
}

export default MyPageButton