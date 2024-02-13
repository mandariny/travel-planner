package com.ktds.travelplanner.domain;

import com.ktds.travelplanner.dto.ThemeInfo;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class Theme {
    private Long id;
    private String content;
    private Long planId;

    public Theme(ThemeInfo info, Long planId) {
        this.content = info.getThemeName();
        this.planId = planId;
    }
}
