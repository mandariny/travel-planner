package com.ktds.travelplanner.service;

import com.ktds.travelplanner.domain.Member;
import com.ktds.travelplanner.dto.LoginRequest;
import com.ktds.travelplanner.dto.TokenResponse;
import com.ktds.travelplanner.dto.UserSaveRequest;
import com.ktds.travelplanner.exception.NonExistAccountException;
import com.ktds.travelplanner.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Primary
public class JwtUserService implements UserService{
    private final UserRepository userRepository;

    @Override
    public TokenResponse login(LoginRequest loginRequest) {
        return null;
    }

    @Override
    public void join(UserSaveRequest userSaveRequest) {

    }

    @Override
    public Long getCurrentUserId() {
        return null;
    }

    @Override
    public Member getByCredentials(String loginId, String passwd) {
        Member member = userRepository.getByLoginId(loginId);
        if(!member.getPassword().equals(passwd)) throw new NonExistAccountException();
        return member;
    }
}
