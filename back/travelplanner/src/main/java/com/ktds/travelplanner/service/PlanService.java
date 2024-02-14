package com.ktds.travelplanner.service;

import com.ktds.travelplanner.domain.Like;
import com.ktds.travelplanner.domain.Path;
import com.ktds.travelplanner.domain.Plan;
import com.ktds.travelplanner.domain.Theme;
import com.ktds.travelplanner.dto.*;
import com.ktds.travelplanner.exception.NotExistPlanException;
import com.ktds.travelplanner.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import static com.ktds.travelplanner.dto.FilePath.IMG_PAHT;

@Service
@RequiredArgsConstructor
public class PlanService {
    private final PlanRepository planRepository;
    private final MyPlanRepository myPlanRepository;
    private final ThemeRepository themeRepository;
    private final PathRepository pathRepository;
    private final LikeRepository likeRepository;
    private final MemberService userService;

    public PlanDetailResponse findPlanDetail(Long planId){
        PlanDetailResponse response = planRepository.findPlanDetail(planId);
        if(response == null) throw new NotExistPlanException();

        List<Theme> themes = themeRepository.findAllByPlanId(planId);
        List<PathInfo> paths = pathRepository.findAllByPlanId(planId);
//        Boolean star = likeRepository.likeExist(new Like(memberService.getCurrentUserId(), planId));

        response.setThemes(themes.stream().map(t -> t.getContent()).collect(Collectors.toList()));
        response.setPaths(paths);
//        response.setStar(star);

        return response;
    }

    public PlanListResponse findLikedPlans(){
        return new PlanListResponse(planRepository.findLikedPlans());
    }

    public PlanListResponse findCurrentPlans(){
        return new PlanListResponse(planRepository.findCurrentPlans());
    }

    @Transactional
    public void clonePlan(Long planId) throws IOException {
        // 플랜
        Plan plan = planRepository.findById(planId);

        // 이미지
        String sourceFileName = IMG_PAHT + "\\" + plan.getImage();
        String destinationFile = IMG_PAHT + "\\";

        java.nio.file.Path sourcePath = Paths.get(sourceFileName);
        java.nio.file.Path destinationPath = Paths.get(destinationFile);

        String newFileName = newImagePath(plan.getImage());
        java.nio.file.Path newFilePath = destinationPath.resolve(newFileName);
        Files.copy(sourcePath, newFilePath);

        plan.setWriterId(userService.getCurrentUserId());
        plan.setImage(newFileName);
        myPlanRepository.savePlan(plan);

        List<Theme> themes = themeRepository.findAllByPlanId(planId);
        List<Path> paths = pathRepository.findAllPathByPlanId(planId);

        for(Theme theme : themes){
            theme.setPlanId(plan.getId());
            theme.setId(null);
            themeRepository.saveThemes(theme);
        }

        for(Path path : paths){
            path.setPlanId(plan.getId());
            path.setId(null);
            pathRepository.savePath(path);
        }
    }

    private String newImagePath(String imagePath){
        UUID uuid = UUID.randomUUID();
        String[] str = imagePath.split("\\.");
        String newFileName = str[0] + uuid.toString().substring(0, 4) + "." + str[1];
        return newFileName;
    }

    public PlanListResponse findSearchedPlans(String searchWord) {
        return new PlanListResponse(planRepository.searchPlans(searchWord));
    }

    @Transactional
    public void doLikePlan(Long planId) {
        Long userId = userService.getCurrentUserId();

        Like like = new Like(userId, planId);
        if (likeRepository.likeExist(like)){
            likeRepository.delete(like);
            planRepository.decreaseLike(planId);
        }else{
            likeRepository.save(like);
            planRepository.increaseLike(planId);
        }
    }
}
