package com.ktds.travelplanner.dto;

public enum ThemeInfo {
    HEALING("Healing"),
    ACTIVITY("Activity");

    private final String themeName;

    private ThemeInfo(String themeName){
        this.themeName = themeName;
    }

    public String getThemeName(){
        return themeName;
    }

    public static ThemeInfo getByValue(String value){
        for(ThemeInfo theme : values()){
            if(theme.themeName.equals(value)) return theme;
        }
        throw new IllegalArgumentException("No matching constant for [" + value + "]");
    }
}
