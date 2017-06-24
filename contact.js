$(function () {
    
    $('#contactForm').validator();
    
    $('#contactForm').on('submit', function (e) {
        // if the validator doesn't prevent form submit
        if (!e.isDefaultPrevented()) {
            var url = "/contact.php";
            
            // POST values in the background of the script URL
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data) {
                    // data = JSON object that contact.php returns
                    
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;
                    
                    var alertBox = '<div class="alert' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    
                    if(messageAlert && messageText){
                        $('#contactForm').find('.messages').html(alertBox);
                        // empty the form
                        $('#contactForm')[0].reset();
                    }
                }
            });
            return false;
        }
    })
});