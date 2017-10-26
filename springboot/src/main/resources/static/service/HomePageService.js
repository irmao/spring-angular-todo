/**
 * Executes services requested by the home page
 */
angular.module('poc').service('HomePageService', HomePageService);

// Dependency Injection
HomePageService.$inject = [ 'RequestService' ];

function HomePageService(RequestService) {
	var self = this;

	self.init = function() {
		self.JAVA = 0;
		self.CSHARP = 1;		
		self.baseUrl; 
	}
	
	self.setBaseUrl = function(baseUrl) {
		self.baseUrl = baseUrl;
	}
	
	
	/**
	 * Returns a promise object that, on success, returns all users
	 */
	self.loadAllUsers = function() {
		return RequestService.performRequest('GET', self.baseUrl + '/user/all', undefined, undefined);
	}
	
	/**
	 * Returns a promise object that, on success, returns all tasks
	 */
	self.loadAllTasks = function() {
		return RequestService.performRequest('GET', self.baseUrl + '/task/all', undefined, undefined);
	}
	
	/**
	 * Returns a promise object that, on success, adds the given task to the database
	 */
	self.addTask = function(taskToBeAdded) {
		return RequestService.performRequest('POST', self.baseUrl + '/task/add', undefined, taskToBeAdded);
	}
	
	self.markDone = function(taskId) {
		return RequestService.performRequest('PUT', self.baseUrl + '/task', [taskId, 'markDone'], undefined)
	}
}