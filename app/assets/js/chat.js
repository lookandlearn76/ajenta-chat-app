

$(function(){
  $("#text-enter").keypress(function(event){
    /*13 = enter, if enter is pressed..*/
    if(event.keyCode == 13){
      /*dont refresh page*/
      event.preventDefault();
      var newMsg = $("#text-enter").val();
      $("#text-enter").val("");
      $("#send").submit();
      var prevMsg = $(".chat-box").html();
      if (prevMsg.length > 11){
        prevMsg = prevMsg + "<br>";
      }
      $(".chat-box").html(prevMsg + newMsg);
      $(".chat-box").scrollTop($(".chat-box").prop("scrollHeight"));
    }
  });

  $()

  $("#send").click(function(){
    event.preventDefault();
    var userName = $("#Name").value;
    /*store msg value before sending msg*/
    var newMsg = $("#text-enter").val();
    $("#text-enter").val("");

    var prevMsg = $(".chat-box").html();
    if (prevMsg.length > 11){
      prevMsg = prevMsg + "<br>";
    }
    $(".chat-box").html(prevMsg + newMsg);
    $(".chat-box").scrollTop($(".chat-box").prop("scrollHeight"));
  });
});
