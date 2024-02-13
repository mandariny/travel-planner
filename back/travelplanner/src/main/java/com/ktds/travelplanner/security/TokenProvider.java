package com.ktds.travelplanner.security;

import com.ktds.travelplanner.domain.Member;
import com.ktds.travelplanner.dto.TokenResponse;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

@Slf4j
@Service
public class TokenProvider {

    @Value("${secret.key}")
    private String SECRET_KEY;

    public String create(Member member){
        Date expiryDate = Date.from(Instant.now().plus(1, ChronoUnit.DAYS));

        log.info("secret key : " + SECRET_KEY);
        log.info("expiryDate : " + expiryDate);

        return Jwts.builder()
                .signWith(SignatureAlgorithm.HS512, SECRET_KEY)
                .setSubject(member.getId().toString())
                .setIssuer("ktds onboarding")
                .setIssuedAt(new Date())
                .setExpiration(expiryDate)
                .compact();
    }

    public Long validateAndGetUserId(String token){
        Claims claims = Jwts.parser()
                .setSigningKey(SECRET_KEY)
                .parseClaimsJws(token)
                .getBody();

        return Long.parseLong(claims.getSubject());
    }
}
