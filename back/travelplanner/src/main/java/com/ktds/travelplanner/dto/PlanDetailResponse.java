package com.ktds.travelplanner.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
public class PlanDetailResponse {
    private String title;
    private String intro;
    private String imgPath;
    private List<ThemeInfo> themes;
    private List<PathInfo> paths;
    private Integer liked;
    private String writer;
}
