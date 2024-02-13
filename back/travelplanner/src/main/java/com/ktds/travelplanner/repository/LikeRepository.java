package com.ktds.travelplanner.repository;

import com.ktds.travelplanner.domain.Like;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class LikeRepository {
    private final SqlSessionTemplate sql;

    public boolean likeExist(Like like) {
        return sql.selectOne("LikedPlan.likeExist", like);
    }

    public void delete(Like like) {
        sql.delete("LikedPlan.delete", like);
    }

    public void save(Like like) {
        sql.insert("LikedPlan.save", like);
    }
}
