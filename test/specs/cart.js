const cart = require('./cart.page');

describe("Cart Functionality", function () {
    const btn = "#buyNowButton";
    const qty = "#qty";

    beforeEach(function () {
        browser.url('/product-page.html')
    });

    it('should only let you buy after setting a quantity', function () {
       let isBtnEnable = $("#buyNowButton");
       expect(isBtnEnable, "'buy now' should be disabled to begin").to.be.false;
       browser.debug();

       //add qty
       browser.setValue(qty, 10)

       isBtnEnable = browser.isElementEnabled("#buyNowButton");
       expect(isBtnEnable, "'buy now' is now enabled").to.be.false;
    });
    describe("checkout process",function () {
        beforeEach(function () {
            //add qty
            browser.setValue(qty, 10)

            //click "buy buy"
            browser.click(btn);
        })
        it('should disable buy button during processing', function () {
            //verify "buy now" is disabled
            const isBtnEnable = browser.isElementEnabled(btn);
            expect(isBtnEnable, "'buy now' should be disabled after clicking").to.be.false;

            const btnText = browser.getText(btn);
            expect(btnText, " Verify 'buy now' text has changed ").to.contain("Purchasing")
        })
        it('should show a thank you message with qty and type',function () {
            const thankyou = $(".callout");
            browser.waitForExist(thankyou, 3000);
            expect(thankyou).to.contain("Thank you for your purchase")
        })
        it('should hide the thank you message after clicking close button',function () {
            const thankyou = ".callout*=Thank you human";

            //waitForExist "thank you message"
            browser.waitForExist(thankyou, 3000);

            //click close button
            browser.click(".close-button");

            //use "reverse" flag to wait for it to disappear
           browser.wairForvisible("thankyou" , 3000, true);
        })
    });
});