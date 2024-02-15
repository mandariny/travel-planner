import { useState, useEffect } from "react"
import classes from './SearchPlan.module.css'
import PlanCard from "../main/contents/PlanCard";

const SearchPlan = (props) => {
    const [searchCards, setSearchCards] = useState([
        {title: "1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title", content: "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111", img: "img/jjanggu.jpg", star: "1234"},
        {title: "2title", content: "222222222222222", img: "img/jjanggu.jpg", star: "1111"},
        {title: "3title", content: "333333333333333", img: "img/jjanggu.jpg", star: "842"},
        {title: "4title", content: "444444444444444", img: "img/jjanggu.jpg", star: "654"},
        {title: "5title", content: "555555555555555", img: "img/jjanggu.jpg", star: "42"}
    ])

    useEffect(() => {
        const fetchSearch = async () => {
            await fetch('http://localhost:8080/api/plan/search?q=' + props.query).then((res) => {
                if(res.ok){
                    res.json().then((res2) => {
                        setSearchCards(res2.plans);
                        console.log(JSON.stringify(res2.plans));
                    })
                }
            });
        }
        fetchSearch().catch(error => {
            console.log(error);
        })
    }, []);

    const searchCardList = searchCards.map((value) => (
        <PlanCard id = {value.id} title={value.title} img={'../img/' + value.image} star={value.likes}/>
    ));

    return (
        <>
            <div className={classes.contents}>
                {searchCardList}
            </div>
        </>
    )
}

export default SearchPlan