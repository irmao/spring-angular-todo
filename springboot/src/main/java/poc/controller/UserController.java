package poc.controller;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import poc.model.User;
import poc.repository.UserRepository;

/**
 * Controls the endpoints related to User operations
 */
@RestController
@RequestMapping("/api/user")
public class UserController {
	
	/** The user repository. */
	@Autowired
	private UserRepository userRepository;
	
	/**
	 * Gets the all users.
	 *
	 * @return the all users
	 */
	@RequestMapping(value="all", method=RequestMethod.GET)
	@ResponseBody
	public List<User> getAllUsers() {
		List<User> allUsers = new LinkedList<>();
		userRepository.findAll().forEach(allUsers::add);
		return allUsers;
	}
}
