$(document).ready(function () {
    $('#signin-button').click(function () {
        //var request_url = 'http://127.0.0.1:5000/api/login';
        var request_url = 'https://jrojer.pythonanywhere.com/api/login';

        var data = {
            email: $('#inputEmail').val(),
            password: $('#inputPassword').val()
        };

        $.ajax({
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            dataType: 'json',
            url: request_url,
            success: function (e) {
                console.log(e);
                window.location.replace("/api/private");
            },
            error: function (error) {
                console.log(error);
            }
        });
    });
});