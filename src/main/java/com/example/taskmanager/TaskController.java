package com.example.taskmanager;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/tasks")
public class TaskController {

    private final Map<Integer, String> tasks = new HashMap<>();
    private int idCounter = 1;

    @GetMapping
    public Map<Integer, String> getTasks() {
        return tasks;
    }

    @PostMapping
    public String addTask(@RequestBody Map<String, String> body) {
        String task = body.get("task");
        tasks.put(idCounter++, task);
        return "Task added.";
    }

    @DeleteMapping("/{id}")
    public String deleteTask(@PathVariable int id) {
        if (tasks.containsKey(id)) {
            tasks.remove(id);
            return "Task deleted.";
        } else {
            return "Task not found.";
        }
    }
}
