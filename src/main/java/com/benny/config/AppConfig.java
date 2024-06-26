package com.benny.config;

import com.javite.spring.annotation.EnableVite;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ComponentScan.Filter;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.FilterType;
import org.springframework.context.annotation.Profile;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;

@Configuration
@ComponentScan(basePackages = "com.benny",
        includeFilters = @Filter(type = FilterType.ANNOTATION, value = Configuration.class))
@EnableVite
public class AppConfig {

    @Bean
    public static PropertySourcesPlaceholderConfigurer propertyConfigInDev() {
        return new PropertySourcesPlaceholderConfigurer();
    }

    @Configuration
    @Profile("dev")
    @PropertySource("classpath:application-dev.properties")
    static class DevConfig {

    }


    @Configuration
    @Profile("prod")
    @PropertySource("classpath:application-prod.properties")
    static class ProdConfig {

    }


    @Configuration
    @Profile("default")
    @PropertySource("classpath:application.properties")
    static class DefaultConfig {

    }

}
