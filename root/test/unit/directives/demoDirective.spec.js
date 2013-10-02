describe("{%= name %} - Directives",function(){
    var $rootScope,$compile;

    beforeEach(module('{%= sterileName %}'));
    beforeEach(inject(function(_$rootScope_,_$compile_){
        $rootScope = _$rootScope_;
        $compile = _$compile_;
    }));

    describe("demoDirective",function(){
      var innerText,html,$scope,element,compiled;
      beforeEach(function(){
          $scope = $rootScope.$new();
          innerText = "Hello World!";
          html = "<demo>"+innerText+"</demo>";
          element = angular.element(html),
          compiled = $compile(element);
          $scope.$digest();
      });

      it("should contain the text '"+innerText+"'",function(){
          expect(element.text()).toEqual(innerText);
      });
    });
});
