package com.ktds.travelplanner.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import static com.ktds.travelplanner.dto.ValidatorMessage.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserSaveRequest {

    @NotBlank(message = EMPTY_MESSAGE)
    @Pattern(regexp = USER_ID_FORMAT, message = USER_ID_MESSAGE)
    private String loginId;

    @NotBlank(message =  EMPTY_MESSAGE)
    @Pattern(regexp = USER_PW_FORMAT, message = USER_PW_MESSAGE)
    private String password;

    @NotBlank(message = EMPTY_MESSAGE)
    private String nickname;
}
