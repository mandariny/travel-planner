package com.ktds.travelplanner.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PlanThumbnailResponse {
    private String title;
    private String imgPath;
    private Integer liked;
}
