angular.module('fullStack')
    .controller('mainCtrl', function($scope, $http) {

        $scope.createTask = function(taskText) {
            $http.post('/api/tasks/create', {task: taskText})
                .then(function(response) {
                    console.log('POST RESPONSE', response);

                    $scope.tasks.push(response.data);
                });
        };

        $http.get('/api/tasks').then(function(response) {
            console.log('GET RESPONSE', response);

            $scope.tasks = response.data;
        });

        $scope.updateTask = function(taskObj, update) {
            $http.put('/api/tasks/update/' + taskObj.id, {message: update})
                .then(function(response) {
                    console.log(response);
                });
        };

        $scope.deleteTask = function(task) {
            $http.delete('/api/tasks/delete/' + task.id).then(function(response) {

                $scope.tasks = response.data;

            }, function(err) {
                console.log(err);
            });
        }

    });