import classes from './MyCard.module.css'
import { useNavigate } from 'react-router-dom';

const MyCard = (props) => {
    const navigate = useNavigate();

    const updatePlan = () => {
        navigate("/update/" + props.id)
    }

    const deletePlan = () => {
        const fetchDelete = async () => {
            await fetch('http://localhost:8080/api/me/plan/' + props.id, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('USER')}`
                }
            }).then((res) => {
                console.log("삭제 성공")
            })
        }
        if(sessionStorage.getItem('USER') != null){
            fetchDelete()
            window.location.reload();
        }
    }

    return (
        <div className={classes.total}>
            <div className={classes.line}>
                <div className={classes.button} onClick={updatePlan}>수정</div>
                <div className={classes.button}>|</div>
                <div className={classes.button} onClick={deletePlan}>삭제</div>
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

export default MyCard