package com.ktds.travelplanner.service;

import com.ktds.travelplanner.domain.Member;
import com.ktds.travelplanner.dto.LoginRequest;
import com.ktds.travelplanner.dto.TokenResponse;
import com.ktds.travelplanner.exception.NonExistAccountException;
import com.ktds.travelplanner.repository.MemberRepository;
import com.ktds.travelplanner.security.TokenProvider;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Primary;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
@Primary
public class JwtMemberService implements MemberService {
    private final MemberRepository userRepository;
    private final TokenProvider tokenProvider;

    @Override
    public TokenResponse login(LoginRequest loginRequest) {
        return null;
    }

    @Override
    public TokenResponse join(Member member) {
        userRepository.save(member);
        if(member == null) throw new NonExistAccountException();

        final String token = tokenProvider.create(member);
        final TokenResponse response = new TokenResponse(member.getId(), token);
        return response;
    }

    @Override
    public Long getCurrentUserId() {
        return (Long) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }

    @Override
    public Member getByCredentials(String loginId, String passwd) {
        Member member = userRepository.getByLoginId(loginId);
        if(member == null || !member.getPassword().equals(passwd)) throw new NonExistAccountException();
        return member;
    }
}
