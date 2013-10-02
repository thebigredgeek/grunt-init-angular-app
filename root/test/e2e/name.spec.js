describe('{%= name %}',function(){
    it("should have 10 list items within index.html",function(){
       expect(repeater('ul li').count()).toEqual(10);
    });
});