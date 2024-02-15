import { useNavigate } from 'react-router-dom';
import classes from './PlanCard.module.css'

const PlanCard = (props) => {
    const navigate = useNavigate();

    console.log("LDKJFL" + props.img)
    return (
        <>
            <div className={classes.card} onClick={() => {navigate("/detail/" + props.id)}}>
                <img src={props.img} className={classes.img}/>
                <div className={classes.content}>
                    <div className={classes.title}>{props.title}</div>
                    <div className={classes.star}>⭐{props.star}</div>
                </div>
            </div>

        </>
    )
}

export default PlanCard