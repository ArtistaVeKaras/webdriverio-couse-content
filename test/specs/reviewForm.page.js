class ReviewForm {
    get form() { return $('#comment-form'); }
    get email() { return $('#review-email'); }
    get content() { return $('#review-content'); }

    submit(email, review){
      if (email){
          //enter the email add
          this.email.setValue(email);
      }
      if (review){
          //enter the review comment
          this.review.setValue(review);
      }
      //submit the form
      this.form.submitForm();
    }
}
module.exports = new ReviewForm();