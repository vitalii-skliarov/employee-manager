package dev.vitalii.springbootfullstackwithangular.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.List;

@Configuration
public class ApplicationCorsConfiguration {

    @Bean
    public CorsFilter corsFilter() {
        return new CorsFilter(urlBasedCorsConfigurationSource());
    }

    private UrlBasedCorsConfigurationSource urlBasedCorsConfigurationSource() {
        final UrlBasedCorsConfigurationSource urlBasedCorsConfigurationSource = new UrlBasedCorsConfigurationSource();

        urlBasedCorsConfigurationSource.registerCorsConfiguration("/**", corsConfiguration());

        return urlBasedCorsConfigurationSource;
    }

    private CorsConfiguration corsConfiguration() {
        final CorsConfiguration corsConfiguration = new CorsConfiguration();

        corsConfiguration.setAllowCredentials(true);
        corsConfiguration.setAllowedOrigins(allowedOrigins());
        corsConfiguration.setAllowedHeaders(allowedHeaders());
        corsConfiguration.setExposedHeaders(exposedHeaders());
        corsConfiguration.setAllowedMethods(allowedMethods());

        return corsConfiguration;
    }

    private List<String> allowedOrigins() {
        return List.of(
                "http://localhost:4200"
        );
    }

    private List<String> allowedHeaders() {
        return List.of(
                "Origin",
                "Access-Control-Allow-Origin",
                "Content-Type",
                "Access",
                "Authorization",
                "X-Request-With",
                "Access-Control-Request-Method",
                "Access-Control-Request-Headers"
        );
    }

    private List<String> exposedHeaders() {
        return List.of(
                "Origin",
                "Content-Type",
                "Accept",
                "Authorization",
                "Access-Control-Allow-Origin",
                "Access-Control-Allow-Credentials"
        );
    }

    private List<String> allowedMethods() {
        return List.of(
                "GET",
                "POST",
                "PUT",
                "DELETE",
                "OPTIONS"
        );
    }
}
