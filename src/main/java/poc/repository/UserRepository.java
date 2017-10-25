package poc.repository;

import org.springframework.data.repository.CrudRepository;

import poc.model.User;

public interface UserRepository extends CrudRepository<User, Long>{

}
