package com.example.demo.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.EventTransEntity;
import com.example.demo.repository.EventTransRepository;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/events")
public class EventTransController {

    private final EventTransRepository eventTransRepository;

   @PostMapping
    public EventTransEntity createEvent(@RequestBody EventTransEntity event) {
        return eventTransRepository.save(event);
    }
}
