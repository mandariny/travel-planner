import { useState, useEffect } from "react"
import PlanCard from "./PlanCard"
import classes from './Plan.module.css'

const PopularPlan = () => {
    const BASE_URL = 'http://localhost:8080/api/plan/like'
    const IMAGE_BASE_URL = 'img/'

    const [popularCards, setPopularCards] = useState([
        {title: "1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title", content: "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111", img: "img/jjanggu.jpg", star: "1234"},
        {title: "2title", content: "222222222222222", img: "img/jjanggu.jpg", star: "1111"},
        {title: "3title", content: "333333333333333", img: "img/jjanggu.jpg", star: "842"},
        {title: "4title", content: "444444444444444", img: "img/jjanggu.jpg", star: "654"},
        {title: "5title", content: "555555555555555", img: "img/jjanggu.jpg", star: "42"}
    ])

    useEffect(() => {
        const fetchPopularInfo = async () => {
            await fetch(BASE_URL).then((res) => {
                if(res.ok){
                    res.json().then((res2) => {
                        setPopularCards(res2.plans);
                        console.log(res2);
                    })
                }
            });
        }
        fetchPopularInfo().catch(error => {
            console.log(error);
        })
    }, []);


    const popularCardList = popularCards.map((value) => (
        <PlanCard id={value.id} title={value.title} img={IMAGE_BASE_URL + value.image} star={value.likes}/>
    ));

    return (
        <>
            <h3>
                인기 플랜
            </h3>
            
            <div className={classes.contents}>
                {popularCardList}
            </div>
        </>
    )
}

export default PopularPlan