package com.ktds.travelplanner.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor
public class Member {
    private Long id;
    private String loginId;
    private String password;
    private String nickname;
}
