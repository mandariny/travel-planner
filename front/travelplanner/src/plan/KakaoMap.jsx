/*global kakao*/ 
import React, { useEffect, useRef, useState } from 'react'
import classes from './MapSearch.module.css'

const MapSearch=()=>{
    const [inputWord, setInputWord] = useState('케이티디에스')
    const inputRef = useRef('케이티디에스')

    var infowindow;

    var mapContainer, // 지도를 표시할 div 
        mapOption;  

    // 지도를 생성합니다    
    var map; 

    // 장소 검색 객체를 생성합니다
    var ps; 


    // 키워드 검색 완료 시 호출되는 콜백함수 입니다
    function placesSearchCB (data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {

            // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
            // LatLngBounds 객체에 좌표를 추가합니다
            var bounds = new kakao.maps.LatLngBounds();

            for (var i=0; i<data.length; i++) {
                displayMarker(data[i]);    
                bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
            }       

            // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
            map.setBounds(bounds);
        } 
    }

    // 지도에 마커를 표시하는 함수입니다
    function displayMarker(place) {
        
        // 마커를 생성하고 지도에 표시합니다
        var marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(place.y, place.x) 
        });

        // 마커에 클릭이벤트를 등록합니다
        kakao.maps.event.addListener(marker, 'click', function() {
            // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
            infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
            infowindow.open(map, marker);
        });
    }

    const onSubmitHander = e => {
        e.preventDefault();
        console.log(inputRef.current.value)
        setInputWord(inputRef.current.value)
    }

    useEffect(()=>{
        infowindow = new kakao.maps.InfoWindow({zIndex:1});

        mapContainer = document.getElementById('map'); // 지도를 표시할 div 
        mapOption = {
                center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
            };  

        // 지도를 생성합니다    
        map = new kakao.maps.Map(mapContainer, mapOption); 

        // 장소 검색 객체를 생성합니다
        ps = new kakao.maps.services.Places(); 

        // 키워드로 장소를 검색합니다
        ps.keywordSearch(inputWord, placesSearchCB); 
        
    }, [inputWord])
    
    
    return (
        <>  
            <div id="map" style={{width: '500px', height: '500px'}}></div>
            
            <form onSubmit={onSubmitHander}>
                <input ref={inputRef} type='text'/>
                <button type='submit'>검색</button>
            </form>
        </>
        

    )
}

export default MapSearch;