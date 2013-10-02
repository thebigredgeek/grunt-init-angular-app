describe("{%= sterileName %} - Services",function(){

    beforeEach(function(){
        module("{%= sterileName %}");
    });

    describe("demoService",inject(function(demoService){
        it("should have a method called 'hello' that returns 'world'",function(){
            expect(demoService.hello()).toEqual("world");
        });
    }));
});