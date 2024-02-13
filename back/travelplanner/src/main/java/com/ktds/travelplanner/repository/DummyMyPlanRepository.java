package com.ktds.travelplanner.repository;

import com.ktds.travelplanner.domain.Path;
import com.ktds.travelplanner.domain.Place;
import com.ktds.travelplanner.domain.Plan;
import com.ktds.travelplanner.domain.Theme;
import com.ktds.travelplanner.dto.PlanListResponse;
import com.ktds.travelplanner.dto.PlanThumbnailResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Slf4j
public class DummyMyPlanRepository implements MyPlanRepository{
    @Override
    public Long savePlan(Plan plan) {
        log.info("입력받은 plan : " + plan);
        return 1L;
    }

    @Override
    public PlanListResponse findAllMyPlans(Long currentUserId) {
        List<PlanThumbnailResponse> planList = List.of(new PlanThumbnailResponse(1L, "title1", "image_path1", 3),
                new PlanThumbnailResponse(2L, "title2", "image_path2", 2),
                new PlanThumbnailResponse(3L, "title3", "image_path3", 1));
        return new PlanListResponse(planList);
    }

    @Override
    public PlanListResponse findAllLikedPlans(Long currentUserId) {
        List<PlanThumbnailResponse> planList = List.of(new PlanThumbnailResponse(1L, "title1", "image_path1", 3),
                new PlanThumbnailResponse(2L, "title2", "image_path2", 2),
                new PlanThumbnailResponse(3L, "title3", "image_path3", 1));
        return new PlanListResponse(planList);
    }

    @Override
    public void deleteMyPlan(Long planId) {
        log.info("입력받은 planId : " + planId);
    }

    @Override
    public boolean imagePathExist(String fileName) {
        return true;
    }
}
