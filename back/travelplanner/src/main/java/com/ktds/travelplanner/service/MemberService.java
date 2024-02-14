package com.ktds.travelplanner.service;

import com.ktds.travelplanner.domain.Member;
import com.ktds.travelplanner.dto.LoginRequest;
import com.ktds.travelplanner.dto.TokenResponse;

public interface MemberService {
    TokenResponse login(LoginRequest loginRequest);

    TokenResponse join(Member member);

    Long getCurrentUserId();

    Member getByCredentials(String loginId, String passwd);
}
