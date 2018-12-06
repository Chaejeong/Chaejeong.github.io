$(document).ready(function(){
    $("button").click(function(){
        $.get("profile.json", function(data, status){

            $("#name").html("<b>이름: </b>" + data.name);
            $("#home").html("<b>사는 곳: </b>" + data.home);
            
        });
    });
});
