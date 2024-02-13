package com.ktds.travelplanner.domain;

import com.ktds.travelplanner.dto.PathInfo;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class Place {
    private Long id;
    private String placeName;
    private String placeAddr;

    public Place(PathInfo info) {
        this.placeName = info.getName();
        this.placeAddr = info.getAddr();
    }
}
