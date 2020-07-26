var localStorage = window.localStorage; // bug fix

$(function(){
    $("#inlineRadio1").click(function(){
        $("#username").attr("placeholder", "Nome de Usuário");
    });
    $("#inlineRadio2").click(function(){
        $("#username").attr("placeholder", "CPF");
    });
    $("#login").click(function(){
        const info = {
            username : $("#username").val(),
            password : $("#password").val(),
            type : $("input:checked").val()
        };

        $.post("http://192.168.100.65:8080/meajudabaixada-api/login.php", info).done(function(data){
            console.log(data);
            const Response = JSON.parse(data);
            console.log(Response);
            if(Response.message)
                alert(Response.message);
            
            if(Response.redirect)
            {
                let userinfo = Response.userinfo;
                localStorage.setItem("userinfo", JSON.stringify(userinfo));
                
                if(userinfo.type == "friend")
                    window.location.href = "home_friend.html";
                else
                    window.location.href = "home_requester.html";
            }
        });
    });
});