import { useState } from 'react';
import classes from './MyPage.module.css'
import CardList from './CardList';

const MyPage = () => {

    const [myPlanOpen, setMyPlanOpen] = useState(true);

    return (
        <div className={classes.main}>
            <div className={classes.line}>
                <div className={classes.mypage}>마이페이지</div>
                <div className={classes.toggle}>
                    <div className={[classes.button, `${myPlanOpen && classes.button_clicked}`].join(" ")} onClick={() => {setMyPlanOpen(true)}}>
                        나의 플랜
                    </div>
                    <div className={classes.button}>|</div>
                    <div className={[classes.button, `${!myPlanOpen && classes.button_clicked}`].join(" ")} onClick={() => {setMyPlanOpen(false)}}>
                        찜한 플랜
                    </div>
                </div>
            </div>
            <CardList myPlanOpen={myPlanOpen}/>
        </div>
    )
}

export default MyPage