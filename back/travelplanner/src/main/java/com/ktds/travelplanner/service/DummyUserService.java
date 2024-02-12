package com.ktds.travelplanner.service;

import com.ktds.travelplanner.dto.LoginRequest;
import com.ktds.travelplanner.dto.TokenResponse;
import com.ktds.travelplanner.dto.UserSaveRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class DummyUserService implements UserService{
    @Override
    public TokenResponse login(LoginRequest loginRequest) {
        return new TokenResponse("token123");
    }

    @Override
    public void join(UserSaveRequest userSaveRequest) {
      log.info("DummyUserService Call");
    }

    @Override
    public Long getCurrentUserId() {
        return 1L;
    }
}
