package gs_accessing_data_mysql.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
// A anotação @Entity indica que a classe é uma entidade JPA.
@Data
public class User {
    @Id
    // A anotação @Id indica que o atributo é uma chave primária.
    @GeneratedValue(strategy = GenerationType.AUTO)
    // A anotação @GeneratedValue indica que o valor do atributo é gerado automaticamente.
    private Integer id;

    private String name;
    private String email;
}
