describe('About us video', function () {
    beforeEach(function () {
        browser.url('/');
        const about = $('About');
        about.click();
    })
    it('should open model video with paused', function () {
        console.log('outside the browser');
        const isPaused = browser.execute(function () {
            console.log('inside the browser')
        })
        browser.debug();
    })
})