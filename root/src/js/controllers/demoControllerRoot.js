angular.module("{%= sterileName %}")
    .controller('demoControllerRoot',[
        '$scope',
        function($scope){
            var publicMembers = $scope,
                privateMembers = {};


            publicMembers.rows = 10;

            return publicMembers;
        }]);