package com.ktds.travelplanner.repository;

import com.ktds.travelplanner.domain.Path;
import com.ktds.travelplanner.domain.Place;
import com.ktds.travelplanner.domain.Plan;
import com.ktds.travelplanner.domain.Theme;

import java.util.List;

public interface MyPlanRepository {
    Long savePlan(Plan plan);

    void saveThemes(List<Theme> themes);

    void savePlaces(List<Place> places);

    List<Place> findByAddr(List<Place> places);

    void savePath(List<Path> paths);
}
