package com.ktds.travelplanner.service;

import com.ktds.travelplanner.domain.Path;
import com.ktds.travelplanner.domain.Place;
import com.ktds.travelplanner.domain.Plan;
import com.ktds.travelplanner.domain.Theme;
import com.ktds.travelplanner.dto.PathInfo;
import com.ktds.travelplanner.dto.PlanListResponse;
import com.ktds.travelplanner.dto.PlanSaveRequest;
import com.ktds.travelplanner.dto.ThemeInfo;
import com.ktds.travelplanner.repository.MyPlanRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MyPlanService {
    private final MyPlanRepository myPlanRepository;
    private final UserService userService;

    public void savePlan(PlanSaveRequest planSaveRequest, MultipartFile image){
        // image 저장

        // plan 저장
        Plan plan = new Plan(planSaveRequest, userService.getCurrentUserId());
        Long planId = myPlanRepository.savePlan(plan);

        // theme 저장
        List<Theme> themes = new ArrayList<>();
        List<ThemeInfo> themeInfos = planSaveRequest.getThemes();
        for(ThemeInfo info : themeInfos){
            themes.add(new Theme(info, planId));
        }
        myPlanRepository.saveThemes(themes);

        // place 저장
        List<Place> places = new ArrayList<>();
        List<PathInfo> pathInfos = planSaveRequest.getPaths();
        for(PathInfo info : pathInfos){
            places.add(new Place(info));
        }
        myPlanRepository.savePlaces(places);
        places = myPlanRepository.findByAddr(places);

        // path 저장
        List<Path> paths = new ArrayList<>();
        int len = pathInfos.size();
        for(int i=0; i<len; i++){
            paths.add(new Path(pathInfos.get(i), planId, places.get(i).getId()));
        }
        myPlanRepository.savePath(paths);
    }
    public PlanListResponse findAllMyPlans(){
        return null;
    }

    public PlanListResponse findAllLikedPlans(){
        return null;
    }

    public void updateMyPlan(Long planId, PlanSaveRequest planSaveRequest, MultipartFile image){

    }

    public void deleteMyPlan(Long planId){

    }
}
