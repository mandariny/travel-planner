package com.ktds.travelplanner.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import static com.ktds.travelplanner.dto.ValidatorMessage.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class LoginRequest {
    @NotBlank(message = EMPTY_MESSAGE)
    @Pattern(regexp = USER_ID_FORMAT, message = USER_ID_MESSAGE)
    private String id;

    @NotBlank(message =  EMPTY_MESSAGE)
    @Pattern(regexp = USER_PW_FORMAT, message = USER_PW_MESSAGE)
    private String password;

    private String nickname;
}
