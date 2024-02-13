package com.ktds.travelplanner.exception;

import org.springframework.http.HttpStatus;

public class UnAuthorizedRequestException extends MyException{
    private static final String MESSAGE = "인증되지 않은 요청입니다.";
    public UnAuthorizedRequestException() {
        super(MESSAGE, HttpStatus.FORBIDDEN);
    }
}
