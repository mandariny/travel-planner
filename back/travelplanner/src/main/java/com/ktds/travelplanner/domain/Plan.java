package com.ktds.travelplanner.domain;

import com.ktds.travelplanner.dto.PlanSaveRequest;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class Plan {
    private Long id;
    private String title;
    private String intro;
    private String image;
    private Long writerId;

    public Plan(PlanSaveRequest planSaveRequest, Long userId){
        this.title = planSaveRequest.getTitle();
        this.intro = planSaveRequest.getIntro();
        this.image = planSaveRequest.getImage();
        this.writerId = userId;
    }

    public Plan(String title, String intro, String image){
        this.title = title;
        this.intro = intro;
        this.image = image;
    }
}
