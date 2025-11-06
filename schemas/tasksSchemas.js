const { gql } = require('apollo-server');

const typeDefs = gql`
    """Definicion del esquema para tareas """
    type Task{
        id: ID!
        name: String!
        completed: Boolean!
    }
    
    type Query{
        """ Obtener todas la tareas"""
        getAll:[Task]

        """ Obtener tarae por ID """
        getById(id:ID!): Task
    }
    
    type Mutation{
        """Crear una nueva tarea"""
        createTask(name: String!): Task

        """ Completar tarea por ID"""
        completedTask(id:ID!): Task
    }
`;
module.exports= typeDefs;