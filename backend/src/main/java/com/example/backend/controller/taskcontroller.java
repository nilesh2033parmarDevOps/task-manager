package com.example.backend.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class taskcontroller {

    List<String> tasks = new ArrayList<>();


    @GetMapping("/allTask")
    public List<String> getAllTasks() {

        return tasks;
    }


    @PostMapping("/createTask")
    public List<String> createTask(@RequestBody String task) {

        tasks.add(task);

        return tasks;
    }

}