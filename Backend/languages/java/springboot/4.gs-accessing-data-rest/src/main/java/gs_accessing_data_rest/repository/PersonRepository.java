package gs_accessing_data_rest.repository;

import gs_accessing_data_rest.model.Person;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "people", path = "people")
// A anotação @RepositoryRestResource é usada para exportar um repositório como um serviço REST. O atributo collectionResourceRel é o nome da coleção de recursos e o atributo path é o caminho do recurso.
public interface PersonRepository extends PagingAndSortingRepository<Person, Long>, CrudRepository<Person, Long>{
    // A interface PersonRepository estende a interface PagingAndSortingRepository. A interface PagingAndSortingRepository estende a interface CrudRepository. A interface CrudRepository é uma interface de repositório que fornece métodos CRUD (Create, Read, Update, Delete) padrão.

    List<Person> findByFirstName(@Param("name") String name);
    // O método findByFirstName() é um método de consulta que pesquisa pessoas por nome. O método é implementado automaticamente pelo Spring Data JPA. O método é definido para procurar um parâmetro chamado name que é passado como um parâmetro de consulta.

    List<Person> findByLastName(@Param("name") String name);
    // O método findByLastName() é um método de consulta que pesquisa pessoas por sobrenome. O método é implementado automaticamente pelo Spring Data JPA. O método é definido para procurar um parâmetro chamado name que é passado como um parâmetro de consulta.
}
