import { useState } from "react"
import PlanCard from "./PlanCard"
import classes from './Plan.module.css'

const CurrentPlan = () => {
    const [currentCards, setCurrentCards] = useState([
        {title: "1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title", content: "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111", img: "img/jjanggu.jpg", star: "1234"},
        {title: "2title", content: "222222222222222", img: "img/jjanggu.jpg", star: "1111"},
        {title: "3title", content: "333333333333333", img: "img/jjanggu.jpg", star: "842"},
        {title: "4title", content: "444444444444444", img: "img/jjanggu.jpg", star: "654"},
        {title: "5title", content: "555555555555555", img: "img/jjanggu.jpg", star: "42"}
    ])

    const currentCardList = currentCards.map((value) => (
        <PlanCard title={value.title} img={value.img} star={value.star}/>
    ));

    return (
        <>
            <h3>
                최신 플랜
            </h3>
            
            <div className={classes.contents}>
                {currentCardList}
            </div>
        </>
    )
}

export default CurrentPlan