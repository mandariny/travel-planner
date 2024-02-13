package com.ktds.travelplanner.exception;

import org.springframework.http.HttpStatus;

public class CanNotSavePlan extends MyException{
    private static final String MESSAEG = "플랜 저장에 실패했습니다.";
    public CanNotSavePlan() {
        super(MESSAEG, HttpStatus.EXPECTATION_FAILED);
    }
}
