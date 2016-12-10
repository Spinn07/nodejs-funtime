module.exports = {

    getTasks: function(req, res) {
        res.json(tasks);
    },

    postTask: function(req, res) {
        var newTask = {
            message: req.body.task,
            create: new Date(),
            id: tasks.length + 1
        };

        tasks.push(newTask);

        res.json(newTask);
    },

    updateTask: function(req, res) {
        var payload;

        tasks.forEach(function(task) {
            if(req.params.id == task.id) {
                task.message = req.body.message;

                payload = task;

            }
        });

        res.send(payload);

    },

    deleteTask: function(req, res) {
        var payload;

        tasks.forEach(function(task, index) {
            if(req.params.id == task.id) {
                tasks.splice(index, 1);
            }
        });

        res.json(payload);

    }


};