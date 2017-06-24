$('form#contactForm').validate({
  messages: { },
  submitHandler: function(form) {
    $.ajax({
      url: "//formspree.io/ajtames@gmail.com",
      method: "POST",
      data: $(form).serialize(),
      dataType: "json",
      success: function(data) {
          $("form#contactForm :input").prop("disabled", true);
          $('#thanks').show();
      }
    });
    return false;
  }
});