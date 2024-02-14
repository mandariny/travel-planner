package com.ktds.travelplanner.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RequestPartDto {
    String title;
    String intro;
    String[] themes;
    String[] placeNames;
    String[] placeAddrs;
    String[] placeX;
    String[] placeY;
}
