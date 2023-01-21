const app = angular.module('app', [])

app.controller('GameController', function ($scope, GameService) {
    $scope.submitEntry = function () {
        if (
            typeof $scope.name === 'undefined' ||
            typeof $scope.word === 'undefined'
        ) {
            return
        }
        const entry = {
            name: $scope.name,
            word: $scope.word,
        }
        GameService.submitEntry({ entry }).success(function (response) {
            $scope.word = undefined
            GameService.getScores().success(function ({ results }) {
                $scope.scores = results
            })
        })
    }

    GameService.getScores().success(function ({ results }) {
        $scope.scores = results
        console.log(results)
    })
})

app.service('GameService', function ($http) {
    this.getScores = function () {
        return $http.get('/api/getScores')
    }
    this.submitEntry = function (entry) {
        return $http.post('/api/submitEntry', entry)
    }
})
