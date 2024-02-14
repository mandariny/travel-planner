package com.ktds.travelplanner.exception;

import org.springframework.http.HttpStatus;

public class NonExistAccountException extends MyException{
    private static final String MESSAGE = "아이디 혹은 비밀번호가 일치하지 않습니다.";
    public NonExistAccountException() {
        super(MESSAGE, HttpStatus.BAD_REQUEST);
    }
}
