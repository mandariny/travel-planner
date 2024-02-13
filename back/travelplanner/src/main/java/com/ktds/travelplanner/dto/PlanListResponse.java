package com.ktds.travelplanner.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
public class PlanListResponse {
    List<PlanThumbnailResponse> plans;
}
