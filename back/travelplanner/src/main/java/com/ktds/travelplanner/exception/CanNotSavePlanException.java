package com.ktds.travelplanner.exception;

import org.springframework.http.HttpStatus;

public class CanNotSavePlanException extends MyException{
    private static final String MESSAEG = "플랜 저장에 실패했습니다.";
    public CanNotSavePlanException() {
        super(MESSAEG, HttpStatus.EXPECTATION_FAILED);
    }
}
