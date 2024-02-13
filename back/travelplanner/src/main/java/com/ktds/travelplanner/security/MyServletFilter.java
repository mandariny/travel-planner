package com.ktds.travelplanner.security;

import com.ktds.travelplanner.exception.NonExistAccountException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpFilter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.util.StringUtils;

import java.io.IOException;

public class MyServletFilter extends HttpFilter {
    private TokenProvider tokenProvider;

    @Override
    protected void doFilter(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws IOException, ServletException {
        final String token = parseBearerToken(request);

        if (token == null || token.equalsIgnoreCase("null")) throw new NonExistAccountException();

        Long memberId = tokenProvider.validateAndGetUserId(token);
        filterChain.doFilter(request, response);
    }

    private String parseBearerToken(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");

        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        }
        return null;
    }
}
