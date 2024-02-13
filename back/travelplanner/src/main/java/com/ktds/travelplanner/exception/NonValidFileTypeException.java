package com.ktds.travelplanner.exception;

import org.springframework.http.HttpStatus;

public class NonValidFileTypeException extends MyException{
    private static final String MESSAEG = "이미지 파일만 업로드 가능합니다.";

    public NonValidFileTypeException() {
        super(MESSAEG, HttpStatus.BAD_REQUEST);
    }
}
