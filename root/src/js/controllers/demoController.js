angular.module("{%= sterileName %}")
    .controller('demoController',[
                '$scope',
        function($scope){
            var publicMembers = $scope,
                privateMembers = {};


            publicMembers.hello = function(){
                return 'world';
            };

            return publicMembers;
    }]);