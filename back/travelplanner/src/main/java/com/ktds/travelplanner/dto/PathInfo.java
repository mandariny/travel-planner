package com.ktds.travelplanner.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class PathInfo {
    private Integer pathOrder;
    private String placeName;
    private String placeAddr;
}
