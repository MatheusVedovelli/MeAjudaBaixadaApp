var localStorage = window.localStorage; // bug fix

$(function(){
    $("#register").click(function(){
        const info = {
            name : $("#name").val(),
            email : $("#email").val(),
            fone : $("#fone").val(),
            username : $("#username").val(),
            password : $("#password").val()
        };

        console.log(info);

        $.post("http://192.168.100.65:8080/meajudabaixada-api/register_friend.php", info).done(function(data){
            console.log(data);
            const Response = JSON.parse(data);
            console.log(Response);
            if(Response.message)
                alert(Response.message);
            
            if(Response.redirect)
                top.window.location.href = "index.html";
        });
    });
});