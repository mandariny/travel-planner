package com.ktds.travelplanner.controller;

import com.ktds.travelplanner.dto.PlanDetailResponse;
import com.ktds.travelplanner.dto.PlanListResponse;
import com.ktds.travelplanner.exception.NonValidFileTypeException;
import com.ktds.travelplanner.service.PlanService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/plan")
@RequiredArgsConstructor
@Validated
@CrossOrigin("*")
public class PlanController {
    private final PlanService planService;

    @GetMapping("/{id}")
    public ResponseEntity<PlanDetailResponse> findPlanDetail(@PathVariable("id") Long planId){
        return ResponseEntity.ok().body(planService.findPlanDetail(planId));
    }

    @GetMapping("/like")
    public ResponseEntity<PlanListResponse> findLikedPlans(){
        return ResponseEntity.ok().body(planService.findLikedPlans());
    }

    @GetMapping("/current")
    public ResponseEntity<PlanListResponse> findCurrentPlans(){
        return ResponseEntity.ok().body(planService.findCurrentPlans());
    }

    @GetMapping("/like/{id}")
    public ResponseEntity<Void> doLikePlan(@PathVariable("id") Long planId){
        planService.doLikePlan(planId);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/clone/{id}")
    public ResponseEntity<Void> clonePlan(@PathVariable("id") Long planId) throws IOException {
        planService.clonePlan(planId);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/search")
    public ResponseEntity<PlanListResponse> findSearchedPlans(@RequestParam("q") String searchWord){
        return ResponseEntity.ok().body(planService.findSearchedPlans(searchWord));
    }
}

