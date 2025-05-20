package gs_accessing_mongodb_data_rest.repository;

import gs_accessing_mongodb_data_rest.model.Person;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "people",
        // Atributo que define o nome do recurso de coleção.
        path = "people"
        // Atributo que define o caminho do recurso de coleção.
)
// A anotação @RepositoryRestResource é usada para exportar um repositório como um recurso REST.
public interface PersonRepository extends MongoRepository<Person, String> {
    // A interface PersonRepository estende a interface MongoRepository, que é um repositório CRUD para a entidade Person com um tipo de identificador de String. Essa interface fornece métodos CRUD, além de métodos para pesquisar, excluir e muito mais. A interface MongoRepository é fornecida pelo Spring Data MongoDB.

    List<Person> findByLastName(@Param("name") String name);
    // O método findByLastName é um método de pesquisa personalizado que procura pessoas por sobrenome. O método é implementado automaticamente pelo Spring Data MongoDB.
}
