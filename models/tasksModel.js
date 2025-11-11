const sgMail = require('@sendgrid/mail')

const tasks =[
    {id: 1, name: "tarea 1", completed: false },
    {id: 2, name: "tarea 2", completed: false }
];


function getAll(){
    return tasks;
}

function getById(id){
     return tasks.find((t) => String(t.id) === id) || null;
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
    const index = tasks.findIndex((t) => String(t.id) === id);
    if (index === -1) return null;
    tasks[index] = {
    ...tasks[index],
    completed:true
    }

    //sendgrid ------------------------------
    const msg = {
        to: 'abruizlo@ittepic.edu.mx', // correo del destinatario
        from: 'abruizlo@ittepic.edu.mx', // correo verificado de envio
        subject: 'Tarea Finalizada',
        text: 'Enhorabuena! La tarea ' + tasks[index].name + ' ha sido marcada como completada.',
        html: `
            <p>¡Enhorabuena! La tarea <strong>"${tasks[index].name}"</strong> ha sido marcada como completada.</p>
        `,
    }

    sgMail
    .send(msg)
    .then((response) => {
        console.log(response[0].statusCode)
        console.log(response[0].headers)
    })
    .catch((error) => {
        console.error(error)
    })
    //Email sendgrid --------------------------
    return tasks[index];
}

module.exports={
    getAll,
    createTask,
    getById,
    completedTask
}