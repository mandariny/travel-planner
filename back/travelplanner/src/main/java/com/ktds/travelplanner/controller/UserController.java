package com.ktds.travelplanner.controller;

import com.ktds.travelplanner.dto.LoginRequest;
import com.ktds.travelplanner.dto.TokenResponse;
import com.ktds.travelplanner.dto.UserSaveRequest;
import com.ktds.travelplanner.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
@Validated
public class UserController {
    private final UserService userService;

    @PostMapping("/login")
    public ResponseEntity<TokenResponse> login(@RequestBody final LoginRequest loginRequest){
        return ResponseEntity.ok().body(userService.login(loginRequest));
    }

    @PostMapping("/join")
    public ResponseEntity<Void> join(@RequestBody @Valid final UserSaveRequest userSaveRequest){
        userService.join(userSaveRequest);
        return ResponseEntity.ok().build();
    }
}
