describe("Homepage FAQ Accordion", function() {
    beforeEach(function() {
        browser.url("./");
    })
    it('should  show first section on page load', function () {
        //this option just does not work
        // const firstHeight = browser.getCssProperty(".accordion .accordion-item:first-child .accordion-content", "height");
        // console.log(firstHeight);
        const firstHeight1 = $(".accordion .accordion-item:first-child .accordion-content");
        const res = firstHeight1.getCSSProperty("height");
        expect(res.parsed.value).to.be.greaterThan(0)
        // console.log(res);
    });
    it("should not show other content", function () {
        const secondDisplay = $(".accordion .accordion-item:nth-of-type(2) .accordion-content");
        const res1 = secondDisplay.getCSSProperty("display");
        expect(res1.value).to.be.equal("none");
        // console.log(secondDisplay);
    })
    it("should expand/hide content on click", function () {
        const thirdHeight = $(".accordion .accordion-item:nth-of-type(2) a");
        const res2 = thirdHeight.getCSSProperty("height");
        thirdHeight.click();
        // browser.debug();
        console.log(res2)
        expect(res2.parsed.value).to.be.greaterThan(0);
    })
})
