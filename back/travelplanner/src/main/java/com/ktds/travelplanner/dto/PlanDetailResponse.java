package com.ktds.travelplanner.dto;

import com.ktds.travelplanner.domain.Path;
import com.ktds.travelplanner.domain.Theme;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class PlanDetailResponse {
    private Long id;
    private String title;
    private String intro;
    private String image;
    private List<Theme> themes;
    private List<PathInfo> paths;
    private Integer likes;
    private Timestamp updateTime;
    private String memberId;
}
