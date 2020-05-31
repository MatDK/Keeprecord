var localhost_urls = true;
var url_base = '';
if(localhost_urls)
{
    url_base = 'http://127.0.0.1:5000';
}
else
{
    url_base = 'https://jrojer.pythonanywhere.com';
}

$(document).ready(function () {
    $('#signin-button').click(function () {

        var request_url = url_base + '/api/login';

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
                if (e.success) {
                    window.location.replace("/home.html");
                }
            },
            error: function (error) {
                console.log(error);
            }
        });
    });
});