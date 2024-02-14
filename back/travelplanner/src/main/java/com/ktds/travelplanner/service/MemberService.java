package com.ktds.travelplanner.service;

import com.ktds.travelplanner.domain.Member;
import com.ktds.travelplanner.dto.LoginRequest;
import com.ktds.travelplanner.dto.TokenResponse;
import com.ktds.travelplanner.dto.UserSaveRequest;

public interface MemberService {
    TokenResponse login(LoginRequest loginRequest);

    TokenResponse join(Member member);

    Long getCurrentUserId();

    Member getByCredentials(String loginId, String passwd);

    void checkDuplicateId(String loginId);

    void checkDuplicateNickname(String nickname);
}
