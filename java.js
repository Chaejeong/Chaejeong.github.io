$(document).ready(function(){
    $("button").click(function(){
        $.get("profile.json", function(data, status){
$("#demo").html("<b>�̸�: </b>" + data.name + "<br><b>��� ��: </b>" + data.home);
        });
    });
});
