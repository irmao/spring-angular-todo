package poc.repository;

import org.springframework.data.repository.CrudRepository;

import poc.model.Task;

public interface TaskRepository extends CrudRepository<Task, Long>{

}
