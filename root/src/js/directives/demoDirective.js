angular.module("{%= sterileName %}")
    .directive('demoDirective',[
        function(){
            var definition = {};

            definition.restrict = "E";
            definition.transclude = true;
            definition.templateUrl = "html/directives/demoDirective.html";
            definition.link = function(scope,element,attr){};

            return definition;
    }]);