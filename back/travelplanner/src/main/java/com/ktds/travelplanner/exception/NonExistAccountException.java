package com.ktds.travelplanner.exception;

import org.springframework.http.HttpStatus;

public class NonExistAccountException extends MyException{
    private static final String MESSAGE = "아이디 혹은 비밀번호가 잘못됐습니다.";
    public NonExistAccountException() {
        super(MESSAGE, HttpStatus.NON_AUTHORITATIVE_INFORMATION);
    }
}
