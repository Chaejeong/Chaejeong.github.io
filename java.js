$(document).ready(function(){
    $("button").click(function(){
        $.get("profile.json", function(data, status){
$("#demo").html("<b>이름: </b>" + data.name + "<br><b>사는 곳: </b>" + data.home);
        });
    });
});
