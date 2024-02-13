package com.ktds.travelplanner.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Getter
public class PlanListResponse {
    List<PlanThumbnailResponse> plans;

    public PlanListResponse(){
        plans = new ArrayList<>();
    }

    public PlanListResponse(List<PlanThumbnailResponse> plans){
        this.plans = plans;
    }
}
