(function () {

    $("#contact_inputs").submit(function () {

        var url = "contact.php"; 

        $.ajax({
            type: "POST",
            url: url,
            data: $(this).serialize(), 
            success: function (data)
            {
                var messageAlert = 'alert-' + data.type;
                var messageText = data.message;

                var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                if (messageAlert && messageText) {
                    $('#contact_inputs').find('.messages').html(alertBox);
                    $('#contact_inputs')[0].reset();
                }
            }
        });
        return false; 
    });

});