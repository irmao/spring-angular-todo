/**
 * Controller responsible for controlling the home page
 */
angular.module('poc').controller('HomePageController', HomePageController);

// Dependency Injection
HomePageController.$inject = [ 'HomePageService' ];

function HomePageController(HomePageService) {
	var self = this;
	
	self.init = function() {
		HomePageService.init();
		
		self.allUsers = [];
		
		self.BACKEND_OPTIONS = [
			{label: 'Java', option: HomePageService.JAVA, url: 'http://10.10.54.45:8080/api/'},
			{label: 'C#', option: HomePageService.CSHARP, url: 'http://10.10.54.133:5000/api/'}	
		];
		
		self.selectedBackend = self.BACKEND_OPTIONS[0];
		HomePageService.setBaseUrl(self.selectedBackend.url);
		
		self.loadAllUsers();
		self.loadAllTasks();
	}
	
	self.updateBackend = function() {
		HomePageService.setBaseUrl(self.selectedBackend.url);
		self.loadAllUsers();
		self.loadAllTasks();
	}
	
	/**
	 * Loads all users and stores them in a controller variable
	 */
	self.loadAllUsers = function() {
		self.allUsers = [];
		self.promise = HomePageService.loadAllUsers();
		
		var successCallback = function(response) {
			self.allUsers = response.data;
		};
		
		var failureCallback = function() {
			self.allUsers = [];
		};
		
		self.promise.then(successCallback, failureCallback);
	}	
	
	/**
	 * Loads all tasks and stores them in a controller variable
	 */
	self.loadAllTasks = function() {
		self.allTasks = [];
		self.promise = HomePageService.loadAllTasks();
		
		var successCallback = function(response) {
			self.allTasks = response.data;
		};
		
		var failureCallback = function() {
			self.allTasks = [];
		};
		
		self.promise.then(successCallback, failureCallback);
	}
	
	/**
	 * Add task button click handler 
	 */
	self.addTask = function() {
		var taskToBeAdded = {
			user: self.userToAdd,
			description: self.descriptionToAdd,
			dueDate: self.dueDateToAdd
		};
		
		self.promise = HomePageService.addTask(taskToBeAdded);
		
		var successCallback = function(response) {
			self.loadAllTasks();
		};
		
		self.promise.then(successCallback);
	}
	
	self.markDone = function(taskId) {
		self.promise = HomePageService.markDone(taskId);
		
		var successCallback = function() {
			self.loadAllTasks();
		};
		
		self.promise.then(successCallback);
	}
}