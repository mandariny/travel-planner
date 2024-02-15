import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import classes from './Detail.module.css'

const Detail = () => {
    const BASE_URL = 'http://localhost:8080/api/plan'
    const IMAGE_BASE_URL = 'img/'
    const img = 'img/image-fe37d2cb-ca8a-430c-970c-cf176bb7b4c4.jpeg'

    const {id} = useParams();
    const [title, setTitle] = useState('')
    const [intro, setIntro] = useState('')
    const [image, setImage] = useState('')
    const [path, setPath] = useState([])
    const [themeValue, setThemeValue] = useState([]);
    const [like, setLike] = useState(0)
    const [updateTime, setUpdateTime] = useState()
    const [star, setStar] = useState(false)

    useEffect(() => {
        const fetchDetailInfo = async () => {
            await fetch (BASE_URL + '/' + id).then((res) => {
                if(res.ok){
                    res.json().then((res2) => {
                        console.log("title" + JSON.stringify(res2.paths, null, 2))
                        console.log("themes" + JSON.stringify(res2.themes, null, 2))
                        console.log("image" + JSON.stringify(res2.image, null, 2))
                        setTitle(res2.title);
                        setIntro(res2.intro);
                        setImage(res2.image);
                        setThemeValue(res2.themes);
                        setPath(res2.paths);
                        setLike(res2.likes);
                        setUpdateTime(res2.updateTime);
                    })
                }
            })
        }
        fetchDetailInfo().catch(error => {
            console.log(error);
        })

        const fetchDetailInfo2 = async () => {
            console.log("호출 됏다!!!")
            await fetch ('/api/me/plan/star/' + id).then((res) => {
                if(res.ok){
                    res.json().then((res2) => {
                        setStar(res2.star)
                    })
                }
            })
        }
        if(sessionStorage.getItem('USER') != null){
            fetchDetailInfo2().catch(error => {
                console.log(error);
            })
        }

    }, []);

    const starClick = () => {
        const fetchStar = async () => {
            await fetch('http://localhost:8080/api/me/plan/like/' + id, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('USER')}`
                }
            }).then((res) => {
                if(res.ok) setStar(!star)
            })
        }
        if(sessionStorage.getItem('USER') != null){
            fetchStar()
            setStar(!star)
        }
    }

    const clone = () => {
        const fetchClone = async () => {
            await fetch('http://localhost:8080/api/me/plan/clone/' + id, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('USER')}`
                }
            }).then((res) => {
                if(res.ok) setStar(!star)
            })
        }
        if(sessionStorage.getItem('USER') != null){
            fetchClone()
            setStar(!star)
        }
    }

    return (
        <div className={classes.main}>
            <div>
                <div className={classes.subject}>제목</div>
                {title}
            </div>
            <div>
                <div className={classes.subject}>여행지 소개</div>
                {intro}
            </div>
            <div>
                <div className={classes.subject}>대표 사진</div>
                
                <img src={'../' + IMAGE_BASE_URL + image}  className={classes.imgimg}/>
            </div>
            <div>
                <div className={classes.subject}>여행 테마</div>
                <ToggleButtonGroup type="checkbox" value={themeValue}>
                    <ToggleButton id="tbg-btn-1" value={"Healing"} className={themeValue.includes("Healing") ? classes.clicked : classes.unclicked}>
                        힐링
                    </ToggleButton>
                    <ToggleButton id="tbg-btn-2" value={"Activity"} className={themeValue.includes("Activity") ? classes.clicked : classes.unclicked}>
                        액티비티
                    </ToggleButton>
                    <ToggleButton id="tbg-btn-3" value={"Entertainment"} className={themeValue.includes("Entertainment") ? classes.clicked : classes.unclicked}>
                        엔터테인먼트
                    </ToggleButton>
                    <ToggleButton id="tbg-btn-4" value={"Art"} className={themeValue.includes("Art") ? classes.clicked : classes.unclicked}>
                        예술
                    </ToggleButton>
                    <ToggleButton id="tbg-btn-5" value={"Nature"} className={themeValue.includes("Nature") ? classes.clicked : classes.unclicked}>
                        자연
                    </ToggleButton>
                    <ToggleButton id="tbg-btn-6" value={"History"} className={themeValue.includes("History") ? classes.clicked : classes.unclicked}>
                        역사
                    </ToggleButton>
                    <ToggleButton id="tbg-btn-7" value={"Food"} className={themeValue.includes("Food") ? classes.clicked : classes.unclicked}>
                        음식
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div className={classes.subject}>여행 경로</div>
            {path.map((item, index) => (
                <ul key={index}>
                    <li>{item.name}</li>
                    <li>{item.addr}</li>
                </ul>
            ))}
            
            <div onClick={starClick}>
                {star? '🧡' : '🤍'}
            </div>
            <div onClick={clone}>
                {sessionStorage.getItem('USER') != null ? '복제' : ''}
            </div>
            
        </div>
    )
}

export default Detail