describe('TodoListController', function() {
	beforeEach(module('TodoList'));

	var ctrl;

	beforeEach(inject(function($controller) {
		ctrl = $controller('TodoListController');
	}));

	it('initialises with an empty search result and term', function() {
		expect(ctrl.addTask).toBeUndefined();
	});
});

describe('when a user visits the homepage, they should see the todo list items', function() {
	
	beforeEach(module('TodoList'));

	var ctrl;

	beforeEach(inject(function($controller) {
		ctrl = $controller('TodoListController');
	}));

	var items = [
		"go to the gym",
		"fuck bitches", 
		"get money",
	];

	it('displays search results', function() {
		expect(ctrl.taskList.items).toEqual(items);
	});
});