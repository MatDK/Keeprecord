
var request_url = 'https://jrojer.pythonanywhere.com/profile';
//var request_url = 'http://127.0.0.1:5000/profile'

$('#request-button').click(function(){
    $.ajax(request_url,
        {
            success: function (data, status, xhr) {
                const obj = JSON.parse(data);
                $('#username').text(obj['name']);
                $('#email').text(obj['email']);
            }
    });
});

