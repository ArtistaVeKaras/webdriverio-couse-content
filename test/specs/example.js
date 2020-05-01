//no need for none of this  as the congif.js file handles this for us
// const webdriverio = require('webdriverio');
// const options = {desiredCapabilities: { browserName: 'chrome'} };
// const client = webdriverio.remote(options);

describe('Shop CTA Button', function () {
    it('should link to the product page', function () {
        browser.url('./');

        const title = browser.getTitle()
        console.log('Title is:', title);

        var pressButton = $('.shop-callout a')
        pressButton.click()
        const productTitle = browser.getTitle();
        console.log('Title is: ' + productTitle);

        const url = browser.getUrl()
        console.log('urL is: ', url);
    })
})
