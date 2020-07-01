var localStorage = window.localStorage; // bug fix

$(function(){
    $("#inlineRadio1").click(function(){
        $("#frame").attr("src", "register_friend.html");
    });
    $("#inlineRadio2").click(function(){
        $("#frame").attr("src", "register_requester.html");
    });
});