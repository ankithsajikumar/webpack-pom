export default function login() {
	$(document).ready(function() {
	    $('#accesspanel').on('submit', function(e) {
	        e.preventDefault();
	        var username = $('#email').val();
	        var password = $('#password').val();
	        $.ajax({
                type: 'POST',
                url: '/authenticate',
                data: JSON.stringify({username: username, password: password}),
                success: function(data) {
                    $('#litheader').addClass("poweron");
                    $('#go').removeClass().val("Initializing...");
                    var token = data.token;
                    $.ajax({
                        type: 'GET',
                        url: '/home',
                        headers: {"Authorization": "Bearer " + token},
                        success: function(data) {
                            $('.login-v1').append(data);
                        },
                        error: function (error) {
                            $('#litheader').removeClass();
                            $('#go').addClass("denied").val("Access Denied");
                        }
                    });
                },
                error: function (error) {
                    $('#litheader').removeClass();
                    $('#go').addClass("denied").val("Access Denied");
                },
                contentType: "application/json",
                dataType: 'json'
            });
        });
	});
}

