package com.ktds.travelplanner.service;

import com.ktds.travelplanner.domain.Path;
import com.ktds.travelplanner.domain.Place;
import com.ktds.travelplanner.domain.Plan;
import com.ktds.travelplanner.domain.Theme;
import com.ktds.travelplanner.dto.*;
import com.ktds.travelplanner.exception.CanNotSavePlan;
import com.ktds.travelplanner.repository.MyPlanRepository;
import com.ktds.travelplanner.repository.PathRepository;
import com.ktds.travelplanner.repository.PlaceRepository;
import com.ktds.travelplanner.repository.ThemeRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import static com.ktds.travelplanner.dto.FilePath.IMG_PAHT;

@Service
@Slf4j
@RequiredArgsConstructor
public class MyPlanService {
    private final MyPlanRepository myPlanRepository;
    private final PlaceRepository placeRepository;
    private final PathRepository pathRepository;
    private final ThemeRepository themeRepository;
    private final UserService userService;
    private final File uploadDirFile = new File(IMG_PAHT);

//    @Transactional
    public void savePlan(PlanSaveRequest planSaveRequest, MultipartFile image) throws IOException {
        // image 저장
        String fileName = StringUtils.cleanPath(image.getOriginalFilename());

        if(myPlanRepository.imagePathExist(fileName)) {
            fileName = newImagePath(fileName);
            planSaveRequest.setImage(fileName);
            log.info("new image path generate!! : " + fileName);
        }

        File file = new File(uploadDirFile, fileName);
        image.transferTo(file);

        // plan 저장
        Plan plan = new Plan(planSaveRequest, userService.getCurrentUserId());
        Long result = myPlanRepository.savePlan(plan);
        if(result < 0) throw new CanNotSavePlan();

        Long planId = plan.getId();

        log.info("saved plan id : " + planId);

        // theme 저장
        List<ThemeInfo> themeInfos = planSaveRequest.getThemes();
        for(ThemeInfo themeInfo : themeInfos){
            themeRepository.saveThemes(new Theme(themeInfo, planId));
        }

        // place 저장
        List<Place> places = new ArrayList<>();
        List<PathInfo> pathInfos = planSaveRequest.getPaths();
        for(PathInfo info : pathInfos){
            Place place = new Place(info);
            place = placeRepository.findByAddr(place.getPlaceAddr());
            if(place == null){
                place = new Place(info);
                placeRepository.savePlaces(place);
            }
            places.add(place);
        }

        // path 저장
        int len = pathInfos.size();
        for(int i=0; i<len; i++){
            pathRepository.savePath(new Path(pathInfos.get(i), planId, places.get(i).getId()));
        }
    }

    private String newImagePath(String imagePath){
        UUID uuid = UUID.randomUUID();
        String[] str = imagePath.split("\\.");
        String newFileName = str[0] + uuid.toString().substring(0, 4) + "." + str[1];
        return newFileName;
    }
    public PlanListResponse findAllMyPlans(){
        return myPlanRepository.findAllMyPlans(userService.getCurrentUserId());
    }

    public PlanListResponse findAllLikedPlans(){
        return myPlanRepository.findAllLikedPlans(userService.getCurrentUserId());
    }

    public void updateMyPlan(Long planId, PlanSaveRequest planSaveRequest, MultipartFile image) throws IOException {
        deleteMyPlan(planId);
        savePlan(planSaveRequest, image);
    }

    public void deleteMyPlan(Long planId){
        myPlanRepository.deleteMyPlan(planId);
    }
}
