describe("{%= name %} - Directives",function(){
    describe("demoDirective",function(){

        var innerText = "Hello World!",
            html = "<demo>"+innerText+"</demo>";

        module('{%= sterileName %}');

        inject(function($compile,$rootScope){
            var $scope = $rootScope.$new(),
                element = angular.element(html),
                compiled = $compile(element);

            $scope.$digest();


            it("should contain the text '"+innerText+"'",function(){
                except(element.text()).toEqual(innerText);
            });

        });
    });
});