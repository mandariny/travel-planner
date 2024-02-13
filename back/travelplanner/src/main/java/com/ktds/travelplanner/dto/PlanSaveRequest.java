package com.ktds.travelplanner.dto;

import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class PlanSaveRequest {
    private String title;
    private String intro;
    private String image;
    private List<ThemeInfo> themes;
    private List<PathInfo> paths;

    public PlanSaveRequest(String title, String intro, MultipartFile image, String[] themes, String[] names, String[] addrs){
        this.title = title;
        this.intro = intro;
        this.image = image.getOriginalFilename();
        this.themes = new ArrayList<>();
        this.paths = new ArrayList<>();
        for (int i = 0; i < themes.length; i++) {
            this.themes.add(ThemeInfo.getByValue(themes[i]));
        }
        for (int i = 0; i < names.length; i++) {
            paths.add(new PathInfo(i, names[i], addrs[i]));
        }
    }
}
