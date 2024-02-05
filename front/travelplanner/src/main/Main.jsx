import CurrentPlan from "./contents/CurrentPlan"
import PopularPlan from "./contents/PopularPlan"
import NewPlan from "./new_plan/NewPlan"
import Search from "./search/Search"
import classes from "./Main.module.css"

const Main = () => {
    return (
        <div className={classes.main}>
            <Search/>
            <div className={classes.add}>
                <NewPlan/>
            </div>
            <PopularPlan/>
            <CurrentPlan/>
        </div>
    )
}

export default Main