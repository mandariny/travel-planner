package com.ktds.travelplanner.service;

import com.ktds.travelplanner.dto.LoginRequest;
import com.ktds.travelplanner.dto.TokenResponse;
import com.ktds.travelplanner.dto.UserSaveRequest;
import org.springframework.stereotype.Service;

public interface UserService {
    TokenResponse login(LoginRequest loginRequest);

    void join(UserSaveRequest userSaveRequest);
}
