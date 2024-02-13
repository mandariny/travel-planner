package com.ktds.travelplanner.exception;

import org.springframework.http.HttpStatus;

public class NotExistPlanException extends MyException{
    private static final String MESSAGE = "존재하지 않는 플랜입니다.";
    public NotExistPlanException() {
        super(MESSAGE, HttpStatus.NOT_FOUND);
    }
}
