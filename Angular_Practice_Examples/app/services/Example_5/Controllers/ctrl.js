app.controller('ctrl',ctrl);
ctrl.$inject=['my_service','$scope'];
function ctrl(my_service,$scope) {
    
    my_service.fun_one().then(function (response) {

        $scope.var_one=response;
    });
};