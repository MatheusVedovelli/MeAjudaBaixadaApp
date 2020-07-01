var localStorage = window.localStorage; // bug fix

$(function(){
    $("#inlineRadio1").click(function(){
        $("#username").attr("placeholder", "Nome de Usuário");
    });
    $("#inlineRadio2").click(function(){
        $("#username").attr("placeholder", "CPF");
    });
});