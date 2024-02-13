package com.ktds.travelplanner.repository;

import com.ktds.travelplanner.domain.Plan;
import com.ktds.travelplanner.dto.PlanDetailResponse;
import com.ktds.travelplanner.dto.PlanListResponse;
import com.ktds.travelplanner.dto.PlanThumbnailResponse;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class PlanRepository {
    private final SqlSessionTemplate sql;
    public PlanDetailResponse findPlanDetail(Long planId) {
        return sql.selectOne("Plan.findPlanDetail", planId);
    }

    public List<PlanThumbnailResponse> findLikedPlans() {
        return sql.selectList("findLikedPlans");
    }

    public List<PlanThumbnailResponse> findCurrentPlans() {
        return sql.selectList("findCurrentPlans");
    }

    public Plan findById(Long planId) {
        return sql.selectOne("findById", planId);
    }

    public void increaseLike(Long planId) {
        sql.update("increaseLike", planId);
    }

    public void decreaseLike(Long planId){
        sql.update("decreaseLike", planId);
    }

    public List<PlanThumbnailResponse> searchPlans(String searchWord) {
        return sql.selectList("Plan.searchPlan", searchWord);
    }
}
