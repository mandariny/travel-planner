package com.ktds.travelplanner.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class PlanThumbnailResponse {
    private Long id;
    private String title;
    private String image;
    private Integer likes;
}
