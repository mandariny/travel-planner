package com.ktds.travelplanner.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class Like {
    private Long id;
    private Long memberId;
    private Long planId;

    public Like(Long memberId, Long planId) {
        this.memberId = memberId;
        this.planId = planId;
    }
}
