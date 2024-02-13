package com.ktds.travelplanner.repository;

import com.ktds.travelplanner.domain.Path;
import com.ktds.travelplanner.dto.PathInfo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@RequiredArgsConstructor
@Repository
@Slf4j
public class PathRepository {
    private final SqlSessionTemplate sql;

    public void savePath(Path path) {
        sql.insert("Path.save", path);
    }

    public List<PathInfo> findAllByPlanId(Long planId) {
        return sql.selectList("Path.findPathsByPlanId", planId);
    }

    public List<Path> findAllPathByPlanId(Long planId) {
        return sql.selectList("Path.findAllPathByPlanId", planId);
    }
}
