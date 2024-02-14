package com.ktds.travelplanner.repository;

import com.ktds.travelplanner.domain.Member;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class MemberRepository {
    private final SqlSessionTemplate sql;

    public Member getByLoginId(String loginId) {
        return sql.selectOne("Member.getByLoginId", loginId);
    }

    public void save(Member member) {
        sql.insert("Member.save", member);
    }

    public boolean isDuplicatedId(String loginId) {
        return sql.selectOne("Member.isDuplicatedId", loginId);
    }

    public boolean isDuplicatedNickname(String nickname) {
        return sql.selectOne("Member.isDuplicatedNickname", nickname);
    }
}
