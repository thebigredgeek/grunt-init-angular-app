angular.module("{%= sterileName %}")
    .config([
                '$routeProvider',
        function($routeProvider){
            $routeProvider
                .when("/",{
                    templateUrl:"partials/demoPartial.html",
                    controller:"demoController"
                })
                .otherwise({
                    redirectTo:"/"
                });
    }]);