package com.ktds.travelplanner.service;

import com.ktds.travelplanner.dto.PlanDetailResponse;
import com.ktds.travelplanner.dto.PlanListResponse;
import com.ktds.travelplanner.dto.PlanSaveRequest;
import org.springframework.web.multipart.MultipartFile;

public class PlanService {


    public PlanDetailResponse findPlanDetail(Long planId){
        return null;
    }

    public PlanListResponse findLikedPlans(){
        return null;
    }

    public PlanListResponse findCurrentPlans(){
        return null;
    }

    public void clonePlan(Long planId){

    }

    public PlanListResponse findSearchedPlans(String searchWord) {
        return null;
    }

    public void doLikePlan(Long planId) {
    }
}
