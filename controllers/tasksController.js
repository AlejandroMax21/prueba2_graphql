const task = require('../models/tasksModel');

const resolvers ={
    Query:{
        getAll: () => task.getAll(),
        getById: (_, {id}) => task.getById(id)
    },
    Mutation:{
        createTask: (_, {name}) => task.createTask(name),
        completedTask:(_,{id}) => task.completedTask(id)
    }
}

module.exports= resolvers;