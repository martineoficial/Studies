package gs_accessing_gemfire_data_rest.repository;

import gs_accessing_gemfire_data_rest.model.Person;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "people",
        // O nome do recurso de coleção.
        path = "people"
        // O caminho de acesso ao recurso de coleção.
)
// A anotação @RepositoryRestResource é usada para exportar um repositório como um serviço REST.
public interface PersonRepository extends CrudRepository<Person, Long> {
    // A interface CrudRepository é uma interface de repositório genérica que fornece métodos CRUD. Neste caso, a interface CrudRepository é parametrizada com a classe de domínio Person e o tipo de ID Long.

    List<Person> findByLastName(@Param("name") String name);
    // O método findByLastName é um método de consulta que pesquisa pessoas por sobrenome.

    // O parâmetro @Param é usado para vincular um parâmetro de método a um parâmetro de consulta com o mesmo nome.
}
