package com.hhw.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

/**
 *
 * @author HeeWon
 */

 @Configuration
 @EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf((csrConfig) ->
                csrConfig.disable()
            )//1번
            .headers((headerConfig) ->
                headerConfig.frameOptions(FrameOptionsConfig ->
                    FrameOptionsConfig.disable()
                )
            )//2번
            .authorizeHttpRequests((authorizeRequests) ->
                authorizeRequests
                    .requestMatchers("/", "/api/**", "api/login/**").permitAll()
                    .requestMatchers("/posts/**", "api/posts/**").hasRole(Role.USER.name())
                    .requestMatchers("/admin/**", "api/admin/**").hasRole(Role.ADMIN.name())
                    .anyRequest().authenticated()
            );
        return http.build();
    };
}
