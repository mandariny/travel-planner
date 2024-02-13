package com.ktds.travelplanner.repository;

import com.ktds.travelplanner.domain.Path;
import com.ktds.travelplanner.domain.Place;
import com.ktds.travelplanner.domain.Plan;
import com.ktds.travelplanner.domain.Theme;
import com.ktds.travelplanner.dto.PlanListResponse;

import java.util.List;

public interface MyPlanRepository {
    Long savePlan(Plan plan);

    PlanListResponse findAllMyPlans(Long currentUserId);

    PlanListResponse findAllLikedPlans(Long currentUserId);

    void deleteMyPlan(Long planId);

    boolean imagePathExist(String fileName);
}
