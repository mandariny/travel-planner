/*global kakao*/ 
import { useState, useRef, useEffect } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import classes from './PlanForm.module.css'
import classes2 from './MapSearch.module.css'
import axios from 'axios';

const PlanForm = () => {

    const [inputWord, setInputWord] = useState('방배 케이티디에스')
    const inputRef = useRef('방배 케이티디에스')
    const [titleList, setTitleList] = useState([])
    const [addressList, setAddressList] = useState([])
    const [x, setX] = useState([])
    const [y, setY] = useState([])

    var markers = [];

    var mapContainer, // 지도를 표시할 div 
        mapOption;  

    // 지도를 생성합니다    
    var map; 

    // 장소 검색 객체를 생성합니다
    var ps;  

    // 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
    var infowindow;

    function searchPlaces() {

        var keyword = inputWord;
    
        if (!keyword.replace(/^\s+|\s+$/g, '')) {
            alert('키워드를 입력해주세요!');
            return false;
        }
    
        // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
        ps.keywordSearch( keyword, placesSearchCB); 
    }
    
    // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
    function placesSearchCB(data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
    
            // 정상적으로 검색이 완료됐으면
            // 검색 목록과 마커를 표출합니다
            displayPlaces(data);

            // console.log("data !!" + JSON.stringify(data, null, 2))
    
            // 페이지 번호를 표출합니다
            displayPagination(pagination);
    
        } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
    
            alert('검색 결과가 존재하지 않습니다.');
            return;
    
        } else if (status === kakao.maps.services.Status.ERROR) {
    
            alert('검색 결과 중 오류가 발생했습니다.');
            return;
    
        }
    }
    
    // 검색 결과 목록과 마커를 표출하는 함수입니다
    function displayPlaces(places) {
    
        var listEl = document.getElementById('placesList'), 
        menuEl = document.getElementById('menu_wrap'),
        fragment = document.createDocumentFragment(), 
        bounds = new kakao.maps.LatLngBounds(), 
        listStr = '';

        // 검색 결과 목록에 추가된 항목들을 제거합니다
        removeAllChildNods(listEl);
    
        // 지도에 표시되고 있는 마커를 제거합니다
        removeMarker();
        
        for ( var i=0; i<places.length; i++ ) {
    
            // 마커를 생성하고 지도에 표시합니다
            var placePosition = new kakao.maps.LatLng(places[i].y, places[i].x),
                marker = addMarker(placePosition, i), 
                itemEl = getListItem(i, places[i]); // 검색 결과 항목 Element를 생성합니다
    
            // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
            // LatLngBounds 객체에 좌표를 추가합니다
            bounds.extend(placePosition);
    
            // 마커와 검색결과 항목에 mouseover 했을때
            // 해당 장소에 인포윈도우에 장소명을 표시합니다
            // mouseout 했을 때는 인포윈도우를 닫습니다
            (function(marker, title, address, x, y) {
                kakao.maps.event.addListener(marker, 'mouseover', function() {
                    displayInfowindow(marker, title);
                });
    
                kakao.maps.event.addListener(marker, 'mouseout', function() {
                    infowindow.close();
                });

                kakao.maps.event.addListener(marker, 'click', function() {
                    addMapInfo(title, address, x, y);
                })
    
                itemEl.onmouseover =  function () {
                    displayInfowindow(marker, title);
                };
    
                itemEl.onmouseout =  function () {
                    infowindow.close();
                };

                itemEl.onclick = function () {
                    addMapInfo(title, address, x, y);
                };
            })(marker, places[i].place_name, places[i].road_address_name, places[i].x, places[i].y);
    
            fragment.appendChild(itemEl);
        }
    
        // 검색결과 항목들을 검색결과 목록 Element에 추가합니다
        listEl.appendChild(fragment);
        menuEl.scrollTop = 0;
    
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
    }
    
    // 검색결과 항목을 Element로 반환하는 함수입니다
    function getListItem(index, places) {
    
        var el = document.createElement('li'),
        itemStr = '<span class="markerbg marker_' + (index+1) + '"></span>' +
                    '<div class="info">' +
                    '   <h5>' + places.place_name + '</h5>';
    
        if (places.road_address_name) {
            itemStr += '    <span>' + places.road_address_name + '</span>' +
                        '   <span class="jibun gray">' +  places.address_name  + '</span>';
        } else {
            itemStr += '    <span>' +  places.address_name  + '</span>'; 
        }
                     
          itemStr += '  <span class="tel">' + places.phone  + '</span>' +
                    '</div>';           
    
        el.innerHTML = itemStr;
        el.className = 'item';
    
        return el;
    }
    
    // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
    function addMarker(position, idx, title) {
        var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png', // 마커 이미지 url, 스프라이트 이미지를 씁니다
            imageSize = new kakao.maps.Size(36, 37),  // 마커 이미지의 크기
            imgOptions =  {
                spriteSize : new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
                spriteOrigin : new kakao.maps.Point(0, (idx*46)+10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
                offset: new kakao.maps.Point(13, 37) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
            },
            markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
                marker = new kakao.maps.Marker({
                position: position, // 마커의 위치
                image: markerImage 
            });
    
        marker.setMap(map); // 지도 위에 마커를 표출합니다
        markers.push(marker);  // 배열에 생성된 마커를 추가합니다
    
        return marker;
    }
    
    // 지도 위에 표시되고 있는 마커를 모두 제거합니다
    function removeMarker() {
        for ( var i = 0; i < markers.length; i++ ) {
            markers[i].setMap(null);
        }   
        markers = [];
    }
    
    // 검색결과 목록 하단에 페이지번호를 표시는 함수입니다
    function displayPagination(pagination) {
        var paginationEl = document.getElementById('pagination'),
            fragment = document.createDocumentFragment(),
            i; 
    
        // 기존에 추가된 페이지번호를 삭제합니다
        while (paginationEl.hasChildNodes()) {
            paginationEl.removeChild (paginationEl.lastChild);
        }
    
        for (i=1; i<=pagination.last; i++) {
            var el = document.createElement('a');
            el.href = "#";
            el.innerHTML = i;
    
            if (i===pagination.current) {
                el.className = 'on';
            } else {
                el.onclick = (function(i) {
                    return function() {
                        pagination.gotoPage(i);
                    }
                })(i);
            }
    
            fragment.appendChild(el);
        }
        paginationEl.appendChild(fragment);
    }
    
    // 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
    // 인포윈도우에 장소명을 표시합니다
    function displayInfowindow(marker, title) {
        var content = '<div style="padding:5px;z-index:1;">' + title + '</div>';
    
        infowindow.setContent(content);
        infowindow.open(map, marker);
    }

    function addMapInfo(title, address, x, y){
        // console.log(title + " : " + address + " : " + road_address)
        setTitleList([...titleList, title]);
        setAddressList([...addressList, address])
    

        // console.log("경로 탐색 : " + titleList [1])
    }
    
     // 검색결과 목록의 자식 Element를 제거하는 함수입니다
    function removeAllChildNods(el) {   
        while (el.hasChildNodes()) {
            el.removeChild (el.lastChild);
        }
    }

    const onSubmitHander = e => {
        e.preventDefault();
        setInputWord(inputRef.current.value)
    }

    useEffect(()=>{
        markers = [];

        mapContainer = document.getElementById('map'); // 지도를 표시할 div 
        mapOption = {
            center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };  

        // 지도를 생성합니다    
        map = new kakao.maps.Map(mapContainer, mapOption); 

        // 장소 검색 객체를 생성합니다
        ps = new kakao.maps.services.Places();  

        // 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
        infowindow = new kakao.maps.InfoWindow({zIndex:1});

        searchPlaces();
        
    }, [inputWord])




// ==================================================




    const [inputCount, setInputCount] = useState(0);
    const [inputCount2, setInputCount2] = useState(0);
    const [themeValue, setThemeValue] = useState([]);
    const [titleText, setTitleText] = useState("");
    const [introText, setIntroText] = useState("");
    const [file, setFile] = useState(null);

    const themeChangeHandler = (val) => {
        setThemeValue(val);
    }

    const titleChangeHandler = (e) => {
        setInputCount(e.target.value.length);
        setTitleText(e.target.value);
    }

    const introChangeHandler = (e) => {
        setInputCount2(e.target.value.length);
        setIntroText(e.target.value);
    }

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
      };

    const BASE_URL = 'http://localhost:8080/api/me/plan'

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log("클릭!")
        console.log(x)
    
        const formData = new FormData();
        formData.append('image', file);
        formData.append('data', 
        new  Blob([
            // JSON.stringify({
            //     'title': titleText,
            //     'intro' : introText,
            //     'themes' : JSON.stringify(themeValue),
            //     'placeNames' : JSON.stringify(titleList),
            //     'placeAddrs' : JSON.stringify(addressList),
            //     'placeX' : JSON.stringify(x),
            //     'placeY' : JSON.stringify(y)
            // })
            JSON.stringify({
                'title': titleText,
                'intro' : introText,
                'themes' : themeValue,
                'placeNames' : titleList,
                'placeAddrs' : addressList
            })
        ], {type: 'application/json'}))

        // formData.append();
        // formData.append('intro', introText);
        // formData.append('themes', JSON.stringify(themeValue));
        // formData.append('placeNames', JSON.stringify(titleList));
        // formData.append('placeAddrs', JSON.stringify(addressList));
        // formData.append('placeX', JSON.stringify(x));
        // formData.append('placeY', JSON.stringify(y));

        await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                // 'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${sessionStorage.getItem('USER')}`
            },
            body: formData
        }).then((res) => {
            if(res.ok){
                console.log("성공!!!!!!!!!!")
            }
        }).catch((error) => {
            console.log("실패!!!!!!! " + error)
        })

        // try {
        //     await axios
        //       .post(BASE_URL, formData, {
        //         headers: {
        //         'Authorization': `Bearer ${sessionStorage.getItem('USER')}`,
        //           "Content-Type": `multipart/form-data`,
        //         },
        //       })
        //       .then((res) => console.log(res));
        //   } catch (e) {
        //     console.log(e)
        //   }
    
      };

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
                    onChange={titleChangeHandler} 
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
                    onChange={introChangeHandler} 
                    maxLength={500}
                />
                </FloatingLabel>
                <p className={classes.limit}>
                    <span>{inputCount2}</span>
                    <span>/500 자</span>
                </p> 
            </div>
            <div>
                <div className={classes.subject}>대표 사진</div>
                <input type="file" onChange={handleFileChange} />
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
            <div className={classes.subject}>여행 경로</div>
                {/* <MapSearch/> */}
            <div className={classes2.box}>
                <div className={classes2.morahaji}>
                    <div className={[classes2.map_wrap, classes2.wairano]}>
                        <div id="map" style={{width: '700px', height: '500px', position: 'relative', overflow: 'hidden'}}></div>

                        <div id="menu_wrap" className={classes2.bg_white}>
                            <div className={classes2.option}>
                                <div>
                                    <form onSubmit={onSubmitHander}>
                                        키워드 : <input ref={inputRef} /> 
                                        <button type="submit">검색</button> 
                                    </form>
                                </div>
                            </div>
                            <hr/>
                            <ul id="placesList"></ul>
                            <div id="pagination"></div>
                        </div>
                    </div>
                </div>
                
                <div className={classes2.path_infos}>
                    <ul>
                        {/* useState로 관리하는 리스트를 반복하여 출력합니다. */}
                        {titleList.map((item, index) => (
                            <ul className={classes2.path_box}>
                                <div className={classes2.path_list}>
                                    <li className={classes2.list_title}>{item}</li>
                                    <li>{item}</li>
                                </div>
                                <div>
                                    <div className={classes2.list_buttons} onClick={(index) => {
                                        console.log("index : " + index)
                                    }}>🔺</div>
                                    <div className={classes2.list_buttons}>🔻</div>
                                    <div className={classes2.list_buttons}>✖</div>
                                </div>
                            </ul>
                        ))}
                    </ul>
                </div>
            </div>
            
            <div className={classes2.send_button} onClick={handleSubmit}>저장하기</div>
        </div>
    )
}

export default PlanForm
