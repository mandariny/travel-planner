package com.ktds.travelplanner.service;

import com.ktds.travelplanner.domain.Member;
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
        return new TokenResponse(1L, "token123");
    }

    @Override
    public void join(UserSaveRequest userSaveRequest) {
      log.info("DummyUserService Call");
    }

    @Override
    public Long getCurrentUserId() {
        return 1L;
    }

    @Override
    public Member getByCredentials(String loginId, String passwd) {
        return null;
    }
}
