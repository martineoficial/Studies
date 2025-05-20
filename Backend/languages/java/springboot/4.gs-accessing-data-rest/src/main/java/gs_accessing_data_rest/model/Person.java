package gs_accessing_data_rest.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
// A anotação @Entity indica que a classe é uma entidade JPA. Uma entidade JPA é uma classe que é mapeada para uma tabela no banco de dados.
@Data
// A anotação @Data é uma anotação do Lombok que gera automaticamente os métodos equals(), hashCode(), toString(), getters e setters.
public class Person {

    @Id
    // A anotação @Id indica que o atributo é uma chave primária.
    @GeneratedValue(strategy = GenerationType.AUTO)
    // A anotação @GeneratedValue indica que o valor do atributo é gerado automaticamente.
    private Long id;

    private String firstName;
    private String lastName;
}
