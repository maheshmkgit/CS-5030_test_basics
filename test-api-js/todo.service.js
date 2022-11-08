class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T2",
            "description": "D2",
            "done": false
        },{
            "title": "T3",
            "description": "D3",
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