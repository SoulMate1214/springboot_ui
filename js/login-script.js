$(function () {

    function isNullEmail() {
        if ($("#username").val().length === 0) {
            $("#email-null-tip").slideDown("fast");
            return true;
        } else {
            $("#email-null-tip").slideUp("fast");
            return false;
        }
    }

    function isNullPassword() {
        if ($("#password").val().length === 0) {
            $("#userpwd-null-tip").slideDown("fast");
            return true;
        } else {
            $("#userpwd-null-tip").slideUp("fast");
            return false;
        }
    }

    $("#username").bind({
       focus: isNullEmail,
       blur: isNullEmail
    });

    $("#password").bind({
        focus: isNullPassword,
        blur: isNullPassword
    });

    //登录
    $('#login').click(function () {
        $.ajax({
            url: "http://localhost:8080/user/login",
            type: "post",
            dataType: "json",
            async: true,
            data: {
                name: $("#username").val(),
                password: $("#password").val(),
            },
            success: function (data) {
                if (data.message == "true") {
                    window.location.href = "index.html";
                } else {
                    window.location.href = "#";
                    alert("用户名或密码有误,请重新输入");
                }
            },
            error: function () {
                alert("信息错误，登录失败");
            },
        })
    });

});
