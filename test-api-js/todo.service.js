class todoservice{
    todo_data = {
        "todo":[{
            "title": "milk",
            "description": "get 2 bottles of milk from schnucks",
            "done": false
        },{
            "title": "matress",
            "description": "bring a bed from walmart on the way back home",
            "done": false
        },{
            "title": "movie",
            "description": "book movie tickets for this weekend",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
        this.todos.todo.push(todo);
             
    }

    delete_todo(id){
        delete this.todos.todo[0]        
    }

    update_todo(id, todo){
        this.todos.todo[id]= todo;        
    }
}


module.exports= todoservice;