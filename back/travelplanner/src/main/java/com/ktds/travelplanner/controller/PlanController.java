package com.ktds.travelplanner.controller;

import com.ktds.travelplanner.dto.PlanDetailResponse;
import com.ktds.travelplanner.dto.PlanListResponse;
import com.ktds.travelplanner.exception.NonValidFileTypeException;
import com.ktds.travelplanner.service.PlanService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/plan")
@RequiredArgsConstructor
@Validated
@Slf4j
@CrossOrigin("*")
public class PlanController {
    private final PlanService planService;

    @GetMapping("/{id}")
    public ResponseEntity<PlanDetailResponse> findPlanDetail(@PathVariable("id") String planId){
        log.info("detail 정보 " + planId);
        return ResponseEntity.ok().body(planService.findPlanDetail(Long.parseLong(planId)));
    }

    @GetMapping("/like")
    public ResponseEntity<PlanListResponse> findLikedPlans(){
        return ResponseEntity.ok().body(planService.findLikedPlans());
    }

    @GetMapping("/current")
    public ResponseEntity<PlanListResponse> findCurrentPlans(){
        return ResponseEntity.ok().body(planService.findCurrentPlans());
    }

    @GetMapping("/search")
    public ResponseEntity<PlanListResponse> findSearchedPlans(@RequestParam("q") String searchWord){
        return ResponseEntity.ok().body(planService.findSearchedPlans(searchWord));
    }
}

