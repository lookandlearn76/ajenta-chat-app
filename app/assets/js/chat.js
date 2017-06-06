$("document").ready(function(){
  $("#text-enter").keypress(function(e){
    if(e.which == 13) {
      e.preventDefault();
      $("#send").click();
    }
  }),
  $("#send").click(function(event){
    event.preventDefault();
    var newMsg = $("#text-enter").val();
    var userName = sessionStorage.getItem("userName");
    $("#text-enter").val("");
    $("#send").submit();
    var prevMsg = $(".chat-box").html();
    if (prevMsg.length > 11){
      prevMsg = prevMsg + "<br>";
    }
    $(".chat-box").html(prevMsg + userName + "<br>" +newMsg);
    $(".chat-box").scrollTop($(".chat-box").prop("scrollHeight"));
  })


});


function save() {
  var nameValue = document.getElementById("Name").value;
  sessionStorage.setItem('userName', nameValue);
};
//$("chat-form").(function(e){
//  e.preventDefault();
//
/*$(function(){
  $("#text-enter").keypress(function(event){
    //13 = enter, if enter is pressed..//
    if(event.keyCode == 13){
      //dont refresh page//
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

  $(function(){
    $("#text-enter").keypress(function(event){
      //13 = enter, if enter is pressed..//
      if(event.keyCode == 13){
        //dont refresh page//
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

  $("#send").click(function(){
    event.preventDefault();
    var userName = $(localStorage.setItem($("#Name")));
    //store msg value before sending msg//
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
*/
