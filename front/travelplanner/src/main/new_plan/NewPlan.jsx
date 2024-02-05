import classes from './NewPlan.module.css'

const NewPlan = () => {
    return(
        <>
            <div className={classes.button} onClick={() => {window.location.reload();}}>
                +
            </div>
        </>
    )
}

export default NewPlan