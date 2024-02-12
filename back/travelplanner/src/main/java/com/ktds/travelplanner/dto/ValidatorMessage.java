package com.ktds.travelplanner.dto;

public class ValidatorMessage {
    public static final String EMPTY_MESSAGE = "빈 항목을 확인하세요.";
    public static final String USER_ID_MESSAGE = "아이디는 영문, 숫자로만 이루어진 8자 이상 20자 이하 문자열입니다.";
    public static final String USER_PW_MESSAGE = "비밀번호는 영문, 숫자, 특수문자를 포함해 8자 이상 20자 이하로 입력하세요.";

    public static final String USER_ID_FORMAT = "^[a-zA-Z0-9]{8,20}$";
    public static final String USER_PW_FORMAT = "^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@$&^])[a-zA-Z0-9!@$&^]{8,20}$";
}
