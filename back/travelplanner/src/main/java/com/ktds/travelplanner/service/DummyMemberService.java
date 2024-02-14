package com.ktds.travelplanner.service;

import com.ktds.travelplanner.domain.Member;
import com.ktds.travelplanner.dto.LoginRequest;
import com.ktds.travelplanner.dto.TokenResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class DummyMemberService implements MemberService {
    @Override
    public TokenResponse login(LoginRequest loginRequest) {
        return new TokenResponse(1L, "token123");
    }

    @Override
    public TokenResponse join(Member member) {
      log.info("DummyUserService Call");
      return null;
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
