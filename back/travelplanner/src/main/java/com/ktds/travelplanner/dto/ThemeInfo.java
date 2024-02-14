package com.ktds.travelplanner.dto;

public enum ThemeInfo {
    HEALING("Healing"),
    ACTIVITY("Activity"),
    ENTERTAINMENT("Entertainment"),
    ART("Art"),
    NATURE("Nature"),
    HISTORY("History"),
    FOOD("Food");

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
