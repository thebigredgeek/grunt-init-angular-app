describe("{%= name %} - Controllers",function(){

    module('{%= sterileName %}');

    inject(function($rootScope,$controller){
        describe("demoController",function(){

            var demoControllerScope = $rootScope.$new(),
                demoController = $controller('demoController',{$scope:demoControllerScope});

            it("should have a method called 'hello' that returns 'world'",function(){
                expect(demoController.hello()).toEqual("world");
            });
        });

    });
});