package saveall.saveall.controller;

import org.springframework.web.bind.annotation.*;
import saveall.saveall.domain.User;
import saveall.saveall.repo.MessageRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import java.util.HashMap;

@Controller
/*@ResponseBody*/
@RequestMapping(method = RequestMethod.GET, value = "/")
public class MainController {
    private final MessageRepo messageRepo;

    @Autowired
    public MainController(MessageRepo messageRepo) {
        this.messageRepo = messageRepo;
    }

    @GetMapping
    public String main(Model model, @AuthenticationPrincipal User user) {
        HashMap<Object, Object> data = new HashMap<>();

        data.put("profile", user);
        data.put("messages", messageRepo.findAll());

        /*model.addAttribute("frontendData", data);
        model.addAttribute("isDevMode", "dev".equals(profile));*/

        return "index.html";
    }
}
