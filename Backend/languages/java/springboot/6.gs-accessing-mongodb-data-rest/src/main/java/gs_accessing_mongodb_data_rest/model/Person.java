package gs_accessing_mongodb_data_rest.model;

import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
// A anotação @Data é um projeto do Lombok que gera automaticamente os métodos equals, hashCode, toString, getters e setters.
public class Person {

    @Id
    // A anotação @Id indica que o atributo id é o identificador do documento.
    private String id;

    private String firstName;
    private String lastName;
}
