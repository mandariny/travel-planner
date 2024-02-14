import { useState, useEffect } from "react"
import MyCard from "./MyCard";
import classes from "./CardList.module.css"
import LikedCard from "./LikedCard";

const CardList = (props) => {
    const BASE_URL = 'http://localhost:8080/api/me/plan'
    const IMAGE_BASE_URL = 'img/'

    const [cards, setCards] = useState([
        {title: "1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title", content: "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111", img: "img/jjanggu.jpg", star: "1234"},
        {title: "2title", content: "222222222222222", img: "img/jjanggu.jpg", star: "1111"},
        {title: "3title", content: "333333333333333", img: "img/jjanggu.jpg", star: "842"},
        {title: "4title", content: "444444444444444", img: "img/jjanggu.jpg", star: "654"},
        {title: "5title", content: "555555555555555", img: "img/jjanggu.jpg", star: "42"}
    ])

    useEffect(() => {
        const fetchCurrentInfo = async () => {
            let RQUEST_URL = BASE_URL;
            if(!props.myPlanOpen) RQUEST_URL += "/like"

            console.log("egoegoego  " + RQUEST_URL)
            console.log(props.myPlanOpen)
            await fetch(RQUEST_URL, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('USER')}`
                }
            }).then((res) => {
                if(res.ok){
                    res.json().then((res2) => {
                        setCards(res2.plans);
                        console.log(res2);
                    })
                }
            });
        }
        fetchCurrentInfo().catch(error => {
            console.log(error);
        })
    }, [props]);

    return (
        <>
            <div className={classes.contents}>
                {(props.myPlanOpen) ? (
                    cards.map((value) => (
                        <MyCard title={value.title} img={IMAGE_BASE_URL + value.image} star={value.likes}/>
                    ))
                ) : (
                    cards.map((value) => (
                        <LikedCard title={value.title} img={IMAGE_BASE_URL + value.image} star={value.likes}/>
                    ))
                )}
            </div>
        </>
    )
}

export default CardList