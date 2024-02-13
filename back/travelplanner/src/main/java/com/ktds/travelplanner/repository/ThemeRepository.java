package com.ktds.travelplanner.repository;

import com.ktds.travelplanner.domain.Theme;
import com.ktds.travelplanner.dto.ThemeInfo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
@Slf4j
public class ThemeRepository {
    private final SqlSessionTemplate sql;
    public void saveThemes(Theme theme) {
        sql.insert("Theme.save", theme);
    }
}
