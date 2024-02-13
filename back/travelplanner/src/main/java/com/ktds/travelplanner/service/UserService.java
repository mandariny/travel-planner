package com.ktds.travelplanner.service;

import com.ktds.travelplanner.domain.Member;
import com.ktds.travelplanner.dto.LoginRequest;
import com.ktds.travelplanner.dto.TokenResponse;
import com.ktds.travelplanner.dto.UserSaveRequest;
import org.springframework.stereotype.Service;

public interface UserService {
    TokenResponse login(LoginRequest loginRequest);

    void join(UserSaveRequest userSaveRequest);

    Long getCurrentUserId();

    Member getByCredentials(String loginId, String passwd);
}
