//no need for none of this  as the congif.js file handles this for us
// const webdriverio = require('webdriverio');
// const options = {desiredCapabilities: { browserName: 'chrome'} };
// const client = webdriverio.remote(options);
// const expect = require('chai').expect; this no longer needs to be included in all the files as is added to config file
describe('Shop CTA Button', function () {
    it('should link to the product page', function () {
        browser.url('./');

        const title = browser.getTitle()
        expect(title).to.equal( "Robot Parts Emporium");

        const pressButton = $('.shop-callout a')
        pressButton.click()
        browser.debug();
        const productTitle = browser.getTitle();
        expect(productTitle).to.equal("Totally Not Evil Sentient Robot - Robot Parts Emporium");

        const url = browser.getUrl()
        expect(url).to.include('product-page.html', 'URL mismatch');
    })
})
