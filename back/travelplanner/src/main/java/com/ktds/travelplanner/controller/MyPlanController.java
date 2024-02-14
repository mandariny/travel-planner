package com.ktds.travelplanner.controller;

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

@RestController
@RequestMapping("/api/me/plan")
@RequiredArgsConstructor
@Validated
@Slf4j
@CrossOrigin("*")
public class MyPlanController {
    private final MyPlanService myPlanService;

//    @PostMapping()
//    public ResponseEntity<?> savePlan(@RequestParam(value = "title") String title,
//                                      @RequestParam(value = "intro") String intro,
//                                      @RequestParam(value = "image", required = false) MultipartFile image,
//                                      @RequestParam(value = "themes") String[] themes,
//                                      @RequestParam(value = "placeNames") String[] placeNames,
//                                      @RequestParam(value = "placeAddrs") String[] placeAddrs,
//                                      @RequestParam(value = "placeX") Double[] xaxis,
//                                      @RequestParam(value = "placeY") Double[] yaxis) throws Exception{
//
//        log.info("요청 들어옴 : " + title);
//
//        if(!image.isEmpty()) checkFileValidation(image);
//
//        PlanSaveRequest planSaveRequest = new PlanSaveRequest(title, intro, image, themes, placeNames, placeAddrs, xaxis, yaxis);
//
//        System.out.println(planSaveRequest);
//
//        myPlanService.savePlan(planSaveRequest, image);
//
//        return ResponseEntity.ok().build();
//    }

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

    @GetMapping()
    public ResponseEntity<PlanListResponse> findAllMyPlans(){
        return ResponseEntity.ok().body(myPlanService.findAllMyPlans());
    }

    @GetMapping("/like")
    public ResponseEntity<PlanListResponse> findAllLikedPlans(){
        return ResponseEntity.ok().body(myPlanService.findAllLikedPlans());
    }

//    @PutMapping("{id}")
//    public ResponseEntity<Void> updateMyPlan(@PathVariable("id") Long planId,
//                                             @RequestParam(value = "title") String title,
//                                             @RequestParam(value = "intro") String intro,
//                                             @RequestParam(value = "image") MultipartFile image,
//                                             @RequestParam(value = "themes") String[] themes,
//                                             @RequestParam(value = "placeNames") String[] placeNames,
//                                             @RequestParam(value = "placeAddrs") String[] placeAddrs,
//                                             @RequestParam(value = "placeX") Double[] xaxis,
//                                             @RequestParam(value = "placeY") Double[] yaxis) throws Exception{
//
//        if(!image.isEmpty()) checkFileValidation(image);
//
//        PlanSaveRequest planSaveRequest = new PlanSaveRequest(title, intro, image, themes, placeNames, placeAddrs, xaxis, yaxis);
//        myPlanService.updateMyPlan(planId, planSaveRequest, image);
//
//        return ResponseEntity.ok().build();
//    }

    private void checkFileValidation(MultipartFile file){
        String contentType = file.getContentType();
        if(contentType == null) throw new NonValidFileTypeException();
        if(!contentType.equals("image/jpeg") && !contentType.equals("image/png") && !contentType.equals("image/gif"))
            throw new NonValidFileTypeException();
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteMyPlan(@PathVariable("id") Long planId) {
        myPlanService.deleteMyPlan(planId);
        return ResponseEntity.ok().build();
    }
}
