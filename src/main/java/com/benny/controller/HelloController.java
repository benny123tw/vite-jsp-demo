package com.benny.controller;

import com.benny.bean.HelloForm;
import com.benny.service.AppService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class HelloController {

    private final AppService appService;

    @Autowired
    public HelloController(AppService appService) {
        this.appService = appService;
    }

    @GetMapping("/hello")
    public String printHelloWorld(@ModelAttribute("form") HelloForm form, Model model) {
        model.addAttribute("app_name", appService.getAppName());
        model.addAttribute("env", appService.getEnv());
        return "hello";
    }

    @PostMapping("/world")
    public String printWorld(@ModelAttribute("form") HelloForm form, Model model) {
        model.addAttribute("message", "Hello " + form.getName());
        return "world";
    }

}
