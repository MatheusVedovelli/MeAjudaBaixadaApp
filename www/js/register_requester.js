var localStorage = window.localStorage; // bug fix

$(function(){
    $("#register").click(function(){
        const info = {
            name : $("#name").val(),
            cpf : $("#cpf").val(),
            birthdate : $("#birthdate").val(),
            email : $("#email").val(),
            fone : $("#fone").val(),
            address : $("#address").val(),
            district : $("#district").val(),
            city : $("#city").val(),
            password : $("#password").val()
        };

        $.post("http://192.168.100.65:8080/meajudabaixada-api/register_requester.php", info).done(function(data){
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