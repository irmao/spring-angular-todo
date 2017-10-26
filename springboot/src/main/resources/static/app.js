/**
 * Registers the application modules
 */
angular.module('poc', ['cgBusy']);

//configure cgBusy component for application
angular.module('poc').value('cgBusyDefaults', {
	message:'Please wait', 
	backdrop: true, 
	delay: 0, 
	minDuration: 500,
	templateUrl: 'lib/angular-busy/4.1.4/angular-busy.html'
});