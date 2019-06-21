$(function () {

    function isNotEmail() {
        if (/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test($("#email").val())) {
            $("#email-format-tip").slideUp("fast");
            return false;
        } else {
            $("#email-format-tip").slideDown("fast");
            return true;
        }
    }

    function isNullUserName() {
        if ($("#username").val().length === 0) {
            $("#username-null-tip").slideDown("fast");
            return true;
        } else {
            $("#username-null-tip").slideUp("fast");
            return false;
        }

    }

    function isPasswordIllegal() {
        if (/((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))^\S{8,}$/.test($("#userpwd").val())) {
            $(".userpwd-tip").slideUp("fast");
            return false;
        } else {
            $(".userpwd-tip").slideDown("fast");
            return true;
        }
    }

    function isNotSamePassword() {
        if ($("#userpwd").val() === $("#repwd").val()) {
            $("#repwd-tip").slideUp("fast");
            return false;
        } else {
            $("#repwd-tip").slideDown("fast");
            return true;
        }
    }

    function isNullCreateDate() {
        if ($("#createdate").val().length === 0) {
            $("#create-date-tip").slideDown("fast");
            return true;
        } else {
            $("#create-date-tip").slideUp("fast");
            return false;
        }
    }

    $("#email").bind({
        focus: isNotEmail,
        blur: isNotEmail
    });

    $("#username").bind({
        focus: isNullUserName,
        blur: isNullUserName
    });

    $("#userpwd").bind({
        focus: isPasswordIllegal,
        blur: isPasswordIllegal
    });

    $("#repwd").bind({
        focus: isNotSamePassword,
        blur: isNotSamePassword
    });

    $("#createdate").bind({
        focus: isNullCreateDate,
        blur: isNullCreateDate
    });

    $("#register").click(function () {
        if (!isNotEmail() && !isNullUserName() && !isPasswordIllegal() && !isNotSamePassword() && !isNullCreateDate()) {
            let data = {
                "email": $("#email").val(),
                "username": $("#username").val(),
                "userpwd": $("#userpwd").val(),
                "createdate": $("#createdate").val(),
                "role": $("input[name='role']:checked").val()
            };
            $.ajax({
                type: "post",
                url: "http://127.0.0.1:8080/users",
                async: false,
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify(data),
                success: function (data) {
                            alert("注册成功");
                    window.location.href = "login.html";
                },
                error: function () {
                    $("#error-tip").slideDown();
                }
            });
        }
    });

});
