class Cart {
    get btn() { return $("#buyNowButton"); }
    get qty() { return $("qty"); }
    // get thankyou() { return $(".callout*=Thank you human"); }
}
model.export = new Cart();