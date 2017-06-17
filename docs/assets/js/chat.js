$("document").ready(function(){
  $("#text-enter").keypress(function(e){
//Enter = 13
    if(e.which == 13) {
//make sure page doesnt refresh
      e.preventDefault();
      $("#send").click();
    }
  }),
  $("#send").click(function(event){
    event.preventDefault();
    var newMsg = $("#text-enter").val();
//store users name to be used later
    var userName = sessionStorage.getItem("userName");
//clear to receive next message
    $("#text-enter").val("");
//create nodes to append
    var node1 = document.createElement("div");
    var node2 = document.createElement("div");
    var textNode1 = document.createTextNode(userName);
    var textNode2 = document.createTextNode(newMsg);
    node1.className = "name-bubble";
    node2.className = "bubble-container";
    textNode2.className = "chat-bubble";
    node1.appendChild(textNode1);
    node2.appendChild(textNode2);
    $("#chat-box").append(node1);
    $("#chat-box").append(node2);
//make sure last message is seen at bottom
    $("#chat-box").scrollTop($("#chat-box").prop("scrollHeight"));
  })
});


function save() {
  var nameValue = document.getElementById("Name").value;
//save username to sessionStorage so it can be used in chat labels
  sessionStorage.setItem('userName', nameValue);
};
