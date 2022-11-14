

var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });

// Write all your test cases here that corresponds to software requirements
    
    test("add_todos", () => {
        todo_service.add_todo({"title": "jacket", "description": "order a snow jacket by EOD", "done": false});
        expect(todo_service.get_todos().todo.length).toEqual(4);
    });

   test("update_todos", () => {
        todo_service.update_todo(1, {"title": "movie", "description": "book movie tickets for next weekend", "done": true});
        expect(todo_service.get_todos(1) == {"title": "T5", "description": "D5", "done": true});
    });
    
    test("delete_todos", () => {
        todo_service.delete_todo(2);
        expect(todo_service.get_todos(2) == true );
    });



});