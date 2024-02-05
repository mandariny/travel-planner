import Card from 'react-bootstrap/Card';
import classes from './PlanCard.module.css'

const PlanCard = (props) => {
    return (
        <>
            <div className={classes.card} onClick={() => {window.location.reload();}}>
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