package com.acesoftcorp.aceoffix7springboot2back.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class IndexController {
    @RequestMapping(value = "/index")
    @ResponseBody
    public String index() {
        return "Aceoffix7-react-Springboot2 Demo";
    }
}
