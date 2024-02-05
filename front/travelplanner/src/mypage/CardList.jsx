import { useState } from "react"
import MyCard from "./MyCard";
import classes from "./CardList.module.css"
import LikedCard from "./LikedCard";

const CardList = (props) => {
    const [cards, setCards] = useState([
        {title: "1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title", content: "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111", img: "img/jjanggu.jpg", star: "1234"},
        {title: "2title", content: "222222222222222", img: "img/jjanggu.jpg", star: "1111"},
        {title: "3title", content: "333333333333333", img: "img/jjanggu.jpg", star: "842"},
        {title: "4title", content: "444444444444444", img: "img/jjanggu.jpg", star: "654"},
        {title: "5title", content: "555555555555555", img: "img/jjanggu.jpg", star: "42"}
    ])

    const [cardList, setCardList] = useState([])

    return (
        <>
            <div className={classes.contents}>
                {(props.myPlanOpen) ? (
                    cards.map((value) => (
                        <MyCard title={value.title} img={value.img} star={value.star}/>
                    ))
                ) : (
                    cards.map((value) => (
                        <LikedCard title={value.title} img={value.img} star={value.star}/>
                    ))
                )}
            </div>
        </>
    )
}

export default CardList