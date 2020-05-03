describe('Multiple clicks',function () {
    beforeEach(function () {
        browser.url('/')
    })
    it('should handle multiple clicks in rapid succession',function () {
//click 20x
        for (let x = 0; x < 20; x++){
            const num = (x % 3) + 1;
            const clickBtn = $('.accordion .accordion-item:nth-child(' + num +') a');
            clickBtn.click();
        }
        let num;
        const res = browser.getAttribute('.accordion .accordion-item:nth-child('+ num +')', 'class');
        expect(res).to.contain('is-active');
    })
})