package com.ktds.travelplanner.controller;

import com.ktds.travelplanner.domain.Member;
import com.ktds.travelplanner.dto.LoginRequest;
import com.ktds.travelplanner.dto.TokenResponse;
import com.ktds.travelplanner.dto.UserSaveRequest;
import com.ktds.travelplanner.exception.NonExistAccountException;
import com.ktds.travelplanner.security.TokenProvider;
import com.ktds.travelplanner.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
@Validated
public class UserController {
    private final UserService userService;
    private final TokenProvider tokenProvider;

    @PostMapping("/login")
    public ResponseEntity<TokenResponse> login(@RequestBody final LoginRequest loginRequest){
        Member member = userService.getByCredentials(loginRequest.getLoginId(), loginRequest.getPasswd());

        if(member == null) throw new NonExistAccountException();

        final String token = tokenProvider.create(member);
        final TokenResponse response = new TokenResponse(member.getId(), token);

        return ResponseEntity.ok().body(response);
    }

    @PostMapping("/join")
    public ResponseEntity<Void> join(@RequestBody @Valid final UserSaveRequest userSaveRequest){
        userService.join(userSaveRequest);
        return ResponseEntity.ok().build();
    }
}
