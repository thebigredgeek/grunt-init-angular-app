angular.module("{%= sterileName %}")
    .factory('demoService',[
        function(){
            var publicMembers = {},
                privateMembers = {};

            publicMembers.hello = function(){
                return "world";
            };

            return publicMembers;
    }]);