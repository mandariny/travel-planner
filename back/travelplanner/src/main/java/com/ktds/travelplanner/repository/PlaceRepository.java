package com.ktds.travelplanner.repository;

import com.ktds.travelplanner.domain.Place;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@RequiredArgsConstructor
@Repository
@Slf4j
public class PlaceRepository {
    private final SqlSessionTemplate sql;
    public void savePlaces(Place place) {
        sql.insert("Place.save", place);
    }

    public Place findByAddr(String placeAddr) {
        return sql.selectOne("Place.findByAddr", placeAddr);
    }

}
