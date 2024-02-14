package com.ktds.travelplanner.controller;

import com.ktds.travelplanner.dto.PlanDetailResponse;
import com.ktds.travelplanner.dto.PlanListResponse;
import com.ktds.travelplanner.dto.PlanSaveRequest;
import com.ktds.travelplanner.dto.RequestPartDto;
import com.ktds.travelplanner.exception.NonValidFileTypeException;
import com.ktds.travelplanner.service.MyPlanService;
import com.ktds.travelplanner.service.PlanService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/me/plan")
@RequiredArgsConstructor
@Validated
@Slf4j
@CrossOrigin("*")
public class MyPlanController {
    private final MyPlanService myPlanService;
    private final PlanService planService;

    @PostMapping()
    public ResponseEntity<?> savePlan(@RequestPart(value = "image") MultipartFile image, @RequestPart(value = "data")RequestPartDto dto) throws Exception{

        log.info("요청 들어옴 : " + dto.getTitle());
        log.info("요청 들어옴 addr: " + dto.getPlaceAddrs()[0]);

        if(!image.isEmpty()) checkFileValidation(image);

        PlanSaveRequest planSaveRequest = new PlanSaveRequest(dto.getTitle(), dto.getIntro(), image, dto.getThemes(), dto.getPlaceNames(), dto.getPlaceAddrs());

        System.out.println(planSaveRequest);

        myPlanService.savePlan(planSaveRequest, image);

        return ResponseEntity.ok().build();
    }

    @PostMapping("/update")
    public ResponseEntity<?> updatePlan(@RequestPart(value = "id") String planId, @RequestPart(value = "image") MultipartFile image, @RequestPart(value = "data")RequestPartDto dto) throws Exception{
        myPlanService.deleteMyPlan(Long.parseLong(planId));

        if(!image.isEmpty()) checkFileValidation(image);

        PlanSaveRequest planSaveRequest = new PlanSaveRequest(dto.getTitle(), dto.getIntro(), image, dto.getThemes(), dto.getPlaceNames(), dto.getPlaceAddrs());

        System.out.println(planSaveRequest);

        myPlanService.savePlan(planSaveRequest, image);

        return ResponseEntity.ok().build();
    }

    @GetMapping()
    public ResponseEntity<PlanListResponse> findAllMyPlans(){
        return ResponseEntity.ok().body(myPlanService.findAllMyPlans());
    }

    @GetMapping("/like")
    public ResponseEntity<PlanListResponse> findAllLikedPlans(){
        return ResponseEntity.ok().body(myPlanService.findAllLikedPlans());
    }

    private void checkFileValidation(MultipartFile file){
        String contentType = file.getContentType();
        if(contentType == null) throw new NonValidFileTypeException();
        if(!contentType.equals("image/jpeg") && !contentType.equals("image/png") && !contentType.equals("image/gif"))
            throw new NonValidFileTypeException();
    }

    @GetMapping("/star/{id}")
    public ResponseEntity<PlanDetailResponse> getLikeState(@PathVariable("id") String planId){
        return ResponseEntity.ok().body(myPlanService.getLikeState(Long.parseLong(planId)));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteMyPlan(@PathVariable("id") String planId) {
        myPlanService.deleteMyPlan(Long.parseLong(planId));
        return ResponseEntity.ok().build();
    }

    @GetMapping("/like/{id}")
    public ResponseEntity<Void> doLikePlan(@PathVariable("id") String planId){
        planService.doLikePlan(Long.parseLong(planId));
        return ResponseEntity.ok().build();
    }

    @GetMapping("/clone/{id}")
    public ResponseEntity<Void> clonePlan(@PathVariable("id") Long planId) throws IOException {
        planService.clonePlan(planId);
        return ResponseEntity.ok().build();
    }
}
