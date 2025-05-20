package gs_rest_hateoas.controller;

import gs_rest_hateoas.model.Greeting;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

@RestController
// A anotação @RestController é usada para marcar uma classe como um controlador Spring MVC que é responsável por lidar com solicitações HTTP em um aplicativo Spring. Ela combina as anotações @Controller e @ResponseBody.
public class GreetingController {
    private static final String TEMPLATE = "Hello, %s!";

    @RequestMapping("/greeting")
    // A anotação @RequestMapping é usada para mapear solicitações HTTP a métodos de manipulação de solicitações em um controlador Spring MVC. Ela pode ser usada em nível de classe ou método.
    public HttpEntity<Greeting> greetingHttpEntity(@RequestParam(value = "name", defaultValue = "World") String name) {
        // O método greetingHttpEntity() é um manipulador de solicitações que retorna um objeto ResponseEntity<Greeting>. Ele aceita um parâmetro de consulta name e usa o valor padrão "World" se nenhum valor for fornecido.

        Greeting greeting = new Greeting(String.format(TEMPLATE, name));
        // O objeto Greeting é criado com base no nome fornecido e no modelo de saudação. O modelo de saudação é uma string que contém um espaço reservado para o nome.

        greeting.add(linkTo(methodOn(GreetingController.class).greetingHttpEntity(name)).withSelfRel());
        // Um link para o próprio recurso é adicionado ao objeto Greeting. O link é criado com base no método greetingHttpEntity() e no nome fornecido.

        return new ResponseEntity<>(greeting, HttpStatus.OK);
        // O objeto Greeting é encapsulado em um ResponseEntity e retornado com o status HTTP OK.
    }
}
