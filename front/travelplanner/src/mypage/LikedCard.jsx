import classes from "./LikedCard.module.css"
import { useNavigate } from 'react-router-dom';

const LikedCard = (props) => {
    const navigate = useNavigate();

    return (
        <div className={classes.total}>
            <div className={classes.line}>
                <div className={classes.button}>삭제</div>
            </div>
            <div className={classes.card} onClick={() => {navigate("/detail/" + props.id)}}>
                <img src={props.img} className={classes.img}/>
                <div className={classes.content}>
                    <div className={classes.title}>{props.title}</div>
                    <div className={classes.star}>⭐{props.star}</div>
                </div>
            </div>
        </div>
    )
}

export default LikedCard