describe("{%= sterileName %} - Services",function(){
    var demoService;

    beforeEach(module("{%= sterileName %}"));
    beforeEach(inject(function(_demoService_){
        demoService = _demoService_;
    }));

    describe("demoService",function(){
        it("should have a method called 'hello' that returns 'world'",function(){
            expect(demoService.hello()).toEqual("world");
        });
    });
});
