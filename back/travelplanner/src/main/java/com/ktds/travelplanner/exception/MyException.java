package com.ktds.travelplanner.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public class MyException extends RuntimeException{
    private final HttpStatus status;

    public MyException(final String message, final HttpStatus status){
        super(message);
        this.status = status;
    }
}
