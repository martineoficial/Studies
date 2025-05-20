package gs_accessing_data_mysql.repository;

import gs_accessing_data_mysql.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {
    // A interface UserRepository estende a interface CrudRepository.
}