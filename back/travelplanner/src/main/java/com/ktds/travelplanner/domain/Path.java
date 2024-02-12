package com.ktds.travelplanner.domain;

import com.ktds.travelplanner.dto.PathInfo;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class Path {
    private Long id;
    private Integer pathOrder;
    private Long planId;
    private Long placeId;

    public Path(PathInfo pathInfo, Long planId, Long placeId) {
        this.pathOrder = pathInfo.getPathOrder();
        this.planId = planId;
        this.placeId = placeId;
    }
}
