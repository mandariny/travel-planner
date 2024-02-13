package com.ktds.travelplanner.domain;

import com.ktds.travelplanner.dto.ThemeInfo;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Theme {
    private Long id;
    private ThemeInfo content;
    private Long planId;

    public Theme(ThemeInfo info, Long planId) {
        this.content = info;
        this.planId = planId;
    }
}
