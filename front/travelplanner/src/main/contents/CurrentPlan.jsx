import { useState, useEffect } from "react"
import PlanCard from "./PlanCard"
import classes from './Plan.module.css'

const CurrentPlan = () => {
    const BASE_URL = 'http://localhost:8080/api/plan/current'
    const IMAGE_BASE_URL = 'img/'

    const [currentCards, setCurrentCards] = useState([
        {title: "1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title", content: "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111", img: "img/jjanggu.jpg", star: "1234"},
        {title: "2title", content: "222222222222222", img: "img/jjanggu.jpg", star: "1111"},
        {title: "3title", content: "333333333333333", img: "img/jjanggu.jpg", star: "842"},
        {title: "4title", content: "444444444444444", img: "img/jjanggu.jpg", star: "654"},
        {title: "5title", content: "555555555555555", img: "img/jjanggu.jpg", star: "42"}
    ])

    useEffect(() => {
        const fetchCurrentInfo = async () => {
            await fetch(BASE_URL).then((res) => {
                if(res.ok){
                    res.json().then((res2) => {
                        setCurrentCards(res2.plans);
                        console.log(res2);
                    })
                }
            });
        }
        fetchCurrentInfo().catch(error => {
            console.log(error);
        })
    }, []);

    const currentCardList = currentCards.map((value) => (
        <PlanCard id={value.id} title={value.title} img={IMAGE_BASE_URL + value.image} star={value.likes}/>
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