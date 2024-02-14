package com.ktds.travelplanner.domain;

import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Member {
    private Long id;
    private String loginId;
    private String password;
    private String nickname;

    public Member(String loginId, String password, String nickname){
        this.loginId = loginId;
        this.password = password;
        this.nickname = nickname;
    }
}
