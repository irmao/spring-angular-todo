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
		
		self.BASE_URLS = [
			'http://10.10.54.45:8080/',
			'http://10.10.54.133/api/'
		];
		
		self.selectedBackend = self.JAVA; 
	}
	
	self.selectBackend = function(newBackendOption) {
		if (newBackendOption === self.JAVA || newBackendOption === self.CSHARP) {
			self.selectedBackend = newBackendOption;
		}
	}
	
	
	/**
	 * Returns a promise object that, on success, returns all users
	 */
	self.loadAllUsers = function() {
		return RequestService.performRequest('GET', self.BASE_URLS[self.selectedBackend] + 'user/all', undefined, undefined);
	}
	
	/**
	 * Returns a promise object that, on success, returns all tasks
	 */
	self.loadAllTasks = function() {
		return RequestService.performRequest('GET', self.BASE_URLS[self.selectedBackend] + 'task/all', undefined, undefined);
	}
	
	/**
	 * Returns a promise object that, on success, adds the given task to the database
	 */
	self.addTask = function(taskToBeAdded) {
		return RequestService.performRequest('POST', self.BASE_URLS[self.selectedBackend] + 'task/add', undefined, taskToBeAdded);
	}
	
	self.markDone = function(taskId) {
		return RequestService.performRequest('PUT', self.BASE_URLS[self.selectedBackend] + 'task', [taskId, 'markDone'], undefined)
	}
}