package poc.controller;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import poc.model.Task;
import poc.repository.TaskRepository;

/**
 * Controls the endpoints related to Task operations.
 */
@RestController
@RequestMapping("/api/task")
public class TaskController {
	
	/** The task repository. */
	@Autowired
	private TaskRepository taskRepository;
	
	/**
	 * Gets the all tasks.
	 *
	 * @return the all tasks
	 */
	@RequestMapping(value="all", method=RequestMethod.GET)
	@ResponseBody
	public List<Task> getAllTasks() {
		List<Task> allTasks = new LinkedList<>();
		taskRepository.findAll().forEach(allTasks::add);
		return allTasks;
	}
	
	/**
	 * Adds the task.
	 *
	 * @param task the task
	 */
	@RequestMapping(value="add", method=RequestMethod.POST)
	public void addTask(@RequestBody Task task) {
		task.setDone(false);
		taskRepository.save(task);
	}
	
	/**
	 * Mark done.
	 *
	 * @param taskId the task id
	 */
	@RequestMapping(value="/{taskId}/markDone", method=RequestMethod.PUT)
	public void markDone(@PathVariable("taskId") Long taskId) {
		Task task = taskRepository.findOne(taskId);
		
		if (task != null) {
			task.setDone(true);
			taskRepository.save(task);
		}
	}
}
