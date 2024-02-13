package com.ktds.travelplanner.controller;

import com.ktds.travelplanner.dto.ErrorResponse;
import com.ktds.travelplanner.exception.MyException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
@RestControllerAdvice
public class ControllerAdvice {
    private static final String ERROR_MESSAGE = "서버에 예기치 않은 오류가 발생했습니다.";

    @ExceptionHandler(MyException.class)
    public ResponseEntity<ErrorResponse> myExceptionHandler(final MyException exception){
        log.info(exception.getMessage());
        return ResponseEntity
                .status(exception.getStatus())
                .body(new ErrorResponse(exception.getMessage()));
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> invalidArgumentHandler(final MethodArgumentNotValidException exception){
        log.info(exception.getMessage());
        return ResponseEntity.badRequest().body(new ErrorResponse(exception.getBindingResult().getAllErrors().get(0).getDefaultMessage()));
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> unhandledExceptionHandler(final Exception exception){
        log.warn(exception.getMessage());
        return ResponseEntity
                .internalServerError()
                .body(new ErrorResponse(ERROR_MESSAGE));
    }
}
