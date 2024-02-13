package com.ktds.travelplanner.domain;

import com.ktds.travelplanner.dto.PathInfo;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Place {
    private Long id;
    private String placeName;
    private String placeAddr;

    public Place(PathInfo info) {
        this.placeName = info.getPlaceName();
        this.placeAddr = info.getPlaceAddr();
    }
}
