const request = require('request');
browser.addCommand("submitReview",function (email, review) {
    if (email) {
        //enter the email address
        browser.setValue("#review-email", email);
    }
    if (review) {
        //enter comment
        browser.setValue("#review-content", review);
    }
    browser.submitForm("#review-content");
})
describe('The product review form', function () {
    beforeEach(function () {
        //go to product page
        browser.url("/product-page.html");
    })
    it.skip('should add a review when submitted properly', function (done) {
        const emailfiled = $("#review-email").setValue("claudio@email.com");
        //enter email add

        //enter comment
        const comment = $("#review-content").setValue("This a comment review");
        browser.debug();
        //click the submit button
        const submitButton = $('.button').click();

        //assert comment exists
        const reviewComment = $("comment");
        reviewComment.isExisting();
        expect(reviewComment, "comment text exist").to.be.true;
    })
    it.skip('should show an error message if the input is wrong',function () {
        //assert that error message isn't showing at the start
        const isErrorShowing = $("body.nimbus-is-editor:nth-child(2) div.column.row:nth-child(6) div.tabs-content:nth-child(3) div.tabs-panel.is-active.comments:nth-child(1) form:nth-child(3) div.alert.callout:nth-child(2) > p:nth-child(1)");
        expect(isErrorShowing.isDisplayed()).to.be.false;
    })
    it.skip('should hide the errormessage when inout is corrected',function () {
        //submit the form without entering content
        const submitButton = $(".button").click();

        //assert that error message is now showing
    })
    it('should focus on the first invalid on error',function () {
        const emailHasFocus = $('#review-email').hasFocus();
        expect(emailHasFocus, "email should not have focus").to.be.false;

        browser.elementSubmit("form");
    })
    it.only('should allow multiple reviews', function () {
       const res = request('GET','http://jsonplaceholder.typicode.com/posts/1/comments');
       const comments = JSON.parse(res.body().toString('utf-8'));

       //for loop
        comments.forEach(function (comment, idx){
            browser.submitReview(comment,email, comment.name);
            const email = browser.getText(".reviews > .comment:nth-of-type("+ (idx + 3) +") .email");
            expect(email).to.be.equal(comment,email);
        })
    });
})