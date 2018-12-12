$(document).ready(function(){
    $("button").click(function(){
        $.get("document.html", function(data, status){
            alert("랜덤준비물은" + data + "입니다.");
        });
    });
});