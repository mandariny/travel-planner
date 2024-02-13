package com.ktds.travelplanner.repository;

import com.ktds.travelplanner.domain.Member;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class UserRepository {
    private final SqlSessionTemplate sql;

    public Member getByLoginId(String loginId) {
        return sql.selectOne("Member.getByLoginId", loginId);
    }
}
