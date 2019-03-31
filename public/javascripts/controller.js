// Module
var app = angular.module('smsChallengeApp',[]);

// Controller
app.controller('smsChallengeAppController',function($scope, $http){
      
    $http.get('/api/sms?s=11/31/2015&e=11/31/2015')
    .then(function(response) {
        $scope.items = response.data;
    });
    
    // Object
    // column to sort
    $scope.column = 'id';
    
    // sort ordering (Ascending or Descending). Set true for desending
    $scope.reverse = false;   
    
    // called on header click
    $scope.sortColumn = function(col){
        $scope.column = col;
        if($scope.reverse){
            $scope.reverse = false;
            $scope.reverseclass = 'arrow-up';
        }else{
            $scope.reverse = true;
            $scope.reverseclass = 'arrow-down';
        }
    };
    
    // remove and change class
    $scope.sortClass = function(col){
        if($scope.column == col ){
            if($scope.reverse){
                return 'arrow-down';    
            }else{
                return 'arrow-up';
            }
        }else{
            return '';
        }
    }   
});