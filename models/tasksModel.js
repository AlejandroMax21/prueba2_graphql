const tasks =[
    {id: 1, name: "tarea 1", completed: false },
    {id: 2, name: "tarea 2", completed: false }
];

function getAll(){
    return tasks;
}

function getById(id){
     return tasks.find((t) => t.id === id) || null;
}

function createTask(name){
    const newTask={
        id: tasks.length+1,
        name,
        completed: false
    };
    tasks.push(newTask);
    return newTask;
}

function completedTask(id){
    const index = tasks.findIndex((t) => t.id === id);
    if (index === -1) return null;
    tasks[index] = {
    ...tasks[index],
    completed:true
    }
    return tasks[index];
}

module.exports={
    getAll,
    createTask,
    getById,
    completedTask
}