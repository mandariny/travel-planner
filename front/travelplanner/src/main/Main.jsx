import { useNavigate } from 'react-router-dom';

import CurrentPlan from "./contents/CurrentPlan"
import PopularPlan from "./contents/PopularPlan"
import NewPlan from "./new_plan/NewPlan"
import Search from "./search/Search"
import classes from "./Main.module.css"

const Main = () => {
    const navigate = useNavigate();

    return (
        <div className={classes.main}>
            <Search/>
            <PopularPlan/>
            <CurrentPlan/>
            { (sessionStorage.getItem('USER') !== null) ? (
                <div className={classes.add} onClick={() => {
                    navigate("/plan")
                }}>
                    <NewPlan/>
                </div>
            ): <></>}
        </div>
    )
}

export default Main