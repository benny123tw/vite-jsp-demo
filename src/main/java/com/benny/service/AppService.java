package com.benny.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

@Service
public class AppService {

    private final Environment environment;

    @Autowired
    public AppService(Environment environment) {
        this.environment = environment;
    }

    public String getAppName() {
        return environment.getProperty("app.name");
    }

    public String getEnv() {
        return environment.getProperty("env");
    }

}
