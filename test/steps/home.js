const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')

Given('I open the homepage', function () {
    browser.url('./')
})

When('I click on the CTA button', function () {
 browser.click('.shop-callout a');
})

Then('I expect the browser to be on the home page', function () {
    var title = browser.getTitle();
    expect(title).to.equal('Robot Parts Emporium');
})

Then('I expect to be on the product page',function () {
    var productTitle = browser.getTitle();
    expect(productTitle).to.equal('Totally Not Evil sentient Robot - Robot....')

    var ur = browser.getTitle()
    expect(ur).to.include('product-page.html', 'Url mismatch')
})


