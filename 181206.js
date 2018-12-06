$(document).ready(function(){
    $("button").click(function(){
        $.get("ajax_info.txt", function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
        });
    });
});