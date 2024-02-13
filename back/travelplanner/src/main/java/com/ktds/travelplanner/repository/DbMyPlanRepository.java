package com.ktds.travelplanner.repository;

import com.ktds.travelplanner.domain.Plan;
import com.ktds.travelplanner.dto.PlanListResponse;
import com.ktds.travelplanner.dto.PlanThumbnailResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
@Primary
@Slf4j
public class DbMyPlanRepository implements MyPlanRepository{
    private final SqlSessionTemplate sql;

    @Override
    public Long savePlan(Plan plan) {

        return (long) sql.insert("Plan.save", plan);
    }

    @Override
    public PlanListResponse findAllMyPlans(Long currentUserId) {
        PlanListResponse planList = new PlanListResponse(sql.selectList("Plan.findAllMyPlans", currentUserId));
        return planList;
    }

    @Override
    public PlanListResponse findAllLikedPlans(Long currentUserId) {
        PlanListResponse planList = new PlanListResponse(sql.selectList("Plan.findAllLikesPlans", currentUserId));
        return planList;
    }

    @Override
    public void deleteMyPlan(Long planId) {
        sql.delete("Plan.delete", planId);
    }

    @Override
    public boolean imagePathExist(String fileName) {
        return sql.selectOne("Plan.imagePathExist", fileName);
    }
}
