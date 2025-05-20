package gs_accessing_data_mysql.controller;

import gs_accessing_data_mysql.model.User;
import gs_accessing_data_mysql.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
// A anotação @Controller indica que a classe é um controlador Spring MVC.
@RequestMapping(path = "/demo")
// A anotação @RequestMapping indica que a classe responde a solicitações HTTP na URL especificada.
public class MainController {
    @Autowired
    // A anotação @Autowired indica que o atributo é injetado automaticamente.
    private UserRepository userRepository;

    @PostMapping(path = "/add")
    // A anotação @PostMapping indica que o método responde a solicitações HTTP POST na URL especificada.
    public @ResponseBody String addNewUser(@RequestParam String name, @RequestParam String email) {
        // A anotação @RequestBody indica que o parâmetro é passado no corpo da solicitação.
        // A anotação @RequestParam indica que o parâmetro é passado como um parâmetro de solicitação.
        User user = new User();
        user.setName(name);
        user.setEmail(email);
        userRepository.save(user);
        return "Saved";
    }

    @GetMapping(path = "/all")
    // A anotação @GetMapping indica que o método responde a solicitações HTTP GET na URL especificada.
    public @ResponseBody Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }
}
