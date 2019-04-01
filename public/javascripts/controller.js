// Module
var app = angular.module('smsChallengeApp',[]);

// Controller
app.controller('smsChallengeAppController',function($scope, $http){
      
    // Object
    // column to sort
    $scope.column = 'id';
    
    // sort ordering (Ascending or Descending). Set true for desending
    $scope.reverse = false;   

    $scope.formatDate = function(timestamp) {
        var x=new Date(timestamp);
        var dd = x.getDate();
        var mm = x.getMonth()+1;
        var yy = x.getFullYear();
        return mm +"/" + dd+"/" + yy;
     };

    $scope.submit = function() {

        start = this.formatDate(this.StartDate)
        end = this.formatDate(this.EndDate)
        $http.get('/api/sms?s='+start+'&e='+end)
        .then(function(response) {
            $scope.items = response.data;
        });
        
      };
    
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