/**
 * Executes services requested by the home page
 */
angular.module('poc').service('HomePageService', HomePageService);

// Dependency Injection
HomePageService.$inject = [ 'RequestService' ];

function HomePageService(RequestService) {
	var self = this;
	
	/**
	 * Returns a promise object that, on success, returns all users
	 */
	self.loadAllUsers = function() {
		return RequestService.performRequest('GET', 'user/all', undefined, undefined);
	}
	
	/**
	 * Returns a promise object that, on success, returns all tasks
	 */
	self.loadAllTasks = function() {
		return RequestService.performRequest('GET', 'task/all', undefined, undefined);
	}
	
	/**
	 * Returns a promise object that, on success, adds the given task to the database
	 */
	self.addTask = function(taskToBeAdded) {
		return RequestService.performRequest('POST', 'task/add', undefined, taskToBeAdded);
	}
	
	self.markDone = function(taskId) {
		return RequestService.performRequest('PUT', 'task', [taskId, 'markDone'], undefined)
	}
}