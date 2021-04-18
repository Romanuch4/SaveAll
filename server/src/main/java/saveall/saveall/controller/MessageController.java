package saveall.saveall.controller;
import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import saveall.saveall.domain.Message;
import saveall.saveall.domain.Views;
import saveall.saveall.repo.MessageRepo;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("message")//всі запити на  /message будуть відправлятися на даний контролер
public class MessageController {
    private final MessageRepo messageRepo;

    @Autowired
    public MessageController(MessageRepo messageRepo) {
        this.messageRepo = messageRepo;
    }

    @GetMapping
    @JsonView(Views.IdName.class)
    public List<Message> list() {
        return messageRepo.findAll();
    }

    @GetMapping("message/{id}")
    public Message getOne(@PathVariable("id") Message message) {
        return message;
    }

    @PostMapping
    public Message create(@RequestBody Message message) {
        message.setCreationDate(LocalDateTime.now());
        return messageRepo.save(message);
    }

    @PutMapping("message/{id}")
    public Message update(
            @PathVariable("id") Message messageFormDb ,//цей аргумент ми отримаємо через id
            @RequestBody Message message //це ми отримаємо в JSON, Spring сам розпакує і запакує в об'єкт message
    ) {
        BeanUtils.copyProperties(message, messageFormDb, "id");
        return messageRepo.save(messageFormDb);
    }

    @DeleteMapping("message/{id}")
    public void delete(@PathVariable("id") Message message) {
        messageRepo.delete(message);
    }
}

//int counter = 4;
//    public List<Map<String, String>> messages = new ArrayList<Map<String, String>>() {{
//        add(new HashMap<String, String>() {{ put("id", "1"); put("text", "First message");}});
//        add(new HashMap<String, String>() {{ put("id", "2"); put("text", "Second message");}});
//        add(new HashMap<String, String>() {{ put("id", "3"); put("text", "Third message");}});
//    }};
