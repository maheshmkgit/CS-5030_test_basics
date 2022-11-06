class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    //POST
    add_todo(todo){
        // Your code here
    }

    //DELETE
    delete_todo(id){
        // Your code here
    }

    //UPDATE
    update_todo(id, todo){
        // Your code here
    }
}


module.exports= todoservice;