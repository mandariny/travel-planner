package com.ktds.travelplanner.exception;

import org.springframework.http.HttpStatus;

public class DuplicatedIdException extends MyException{
    private static final String MESSAGE = "중복되는 아이디 및 닉네임입니다.";
    public DuplicatedIdException() {
        super(MESSAGE, HttpStatus.BAD_REQUEST);
    }
}
