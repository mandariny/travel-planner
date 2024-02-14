package com.ktds.travelplanner.controller;

import com.ktds.travelplanner.domain.Member;
import com.ktds.travelplanner.dto.LoginRequest;
import com.ktds.travelplanner.dto.TokenResponse;
import com.ktds.travelplanner.dto.UserSaveRequest;
import com.ktds.travelplanner.exception.NonExistAccountException;
import com.ktds.travelplanner.security.TokenProvider;
import com.ktds.travelplanner.service.MemberService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
@Validated
@Slf4j
@CrossOrigin("*")
public class MemberController {
    private final MemberService userService;
    private final TokenProvider tokenProvider;

    @PostMapping("/login")
    public ResponseEntity<TokenResponse> login(@RequestBody final LoginRequest loginRequest){
        Member member = userService.getByCredentials(loginRequest.getId(), loginRequest.getPassword());

        if(member == null) throw new NonExistAccountException();

        final String token = tokenProvider.create(member);
        final TokenResponse response = new TokenResponse(member.getId(), token);

        return ResponseEntity.ok().body(response);
    }

    @PostMapping("/join")
    public ResponseEntity<TokenResponse> join(@RequestBody @Valid final Member member){
        return ResponseEntity.ok().body(userService.join(member));
    }

    @PostMapping("/join/id")
    public ResponseEntity<Void> checkDuplicateId(@RequestBody @Valid final String loginId){
        log.info("input loginId : " + loginId);
        userService.checkDuplicateId(loginId);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/join/nickname")
    public ResponseEntity<Void> checkDuplicate(@RequestBody @Valid final String nickname){
        log.info("input nickname : " + nickname);
        userService.checkDuplicateNickname(nickname);
        return ResponseEntity.ok().build();
    }
}
