import { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import classes from './PlanForm.module.css'
import KakaoMap from './KakaoMap';
import MapSearch from './MapSearch';

const PlanForm = () => {
    const [inputCount, setInputCount] = useState(0);
    const [themeValue, setThemeValue] = useState([])

    const onInputHandler = (e) => {
        setInputCount(e.target.value.length);
    }

    const themeChangeHandler = (val) => {
        setThemeValue(val);
    }

    return (
        <div className={classes.main}>
            <div className={classes.plan}>플랜 작성</div>
            <div>
                <div className={classes.subject}>제목</div>
                <FloatingLabel controlId="floatingTextarea2">
                    <Form.Control
                    as="textarea"
                    placeholder="제목을 입력하세요."
                    style={{ height: '70px' }}
                    onChange={onInputHandler} 
                    maxLength={20}
                />
                </FloatingLabel>
                <p className={classes.limit}>
                    <span>{inputCount}</span>
                    <span>/20 자</span>
                </p>  
            </div>
            <div>
                <div className={classes.subject}>여행지 소개</div>
                <FloatingLabel controlId="floatingTextarea2">
                    <Form.Control
                    as="textarea"
                    placeholder="소개글을 작성하세요."
                    style={{ height: '140px' }}
                    onChange={onInputHandler} 
                    maxLength={500}
                />
                </FloatingLabel>
                <p className={classes.limit}>
                    <span>{inputCount}</span>
                    <span>/500 자</span>
                </p> 
            </div>
            <div>
                <div className={classes.subject}>대표 사진</div>
                <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Control type="file" multiple />
                </Form.Group>
            </div>
            <div>
                <div className={classes.subject}>여행 테마</div>
                <ToggleButtonGroup type="checkbox" value={themeValue} onChange={themeChangeHandler}>
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
            <div>
                {/* <KakaoMap/> */}
                <MapSearch/>
            </div>
        </div>
    )
}

export default PlanForm