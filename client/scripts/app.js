// YOUR CODE HERE:

var app = {};

app.init = function () {
  //fetch messages
  
  //set chatLog to fetched messages
  //iterate over first ten messages
    //append to chat

}

app.chatLog = [];

app.append = function (item){
  var message = escapeHtml(item.text);
  $('#chats').append('<div class="chatMessage"> <p class="userName">' 
  + item.username  + '</p> <p class="messageContent">' 
  + message + '</p> </div>');
}


app.server = 'https://api.parse.com/1/classes/chatterbox';
var messageStore = [];
app.send = function (message) { 
  $.ajax({
    url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'POST',
    data: JSON.stringify(message),
    dataType: 'json',
    contentType: 'application/json',
    success: function (data) {
      console.log('Chatterbox: message sent');
    },
    error: function (data) {
      throw 'chatterbox: Failed to send message';
    }

  });
};

app.fetch = function (){
    $.ajax({
    url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'GET',
    data: JSON.stringify(message),
    dataType: 'json',
    contentType: 'application/json',
    success: function (data) {


      if ($('#chats').children.length <= 2) {
      // initial population of chat board
        for (var i=0; i<10; i++) {
          // populate 10 most recent posts
          app.append(data.results[i]);
        }


      } else {
        app.append(data.results[0]);
      // update already populated chat board

          // populate all most recent posts until last appended post

      }
      // app.chatLog = data.results;
      // console.log(data.results);
      // app.update();
      //app.append(app.chatLog[0]);
      // $('#chats').append('<div class="chatMessage"> <p class="userName">' 
      //   + app.chatLog[0].username  + '</p> <p class="messageContent">' 
      //   + app.chatLog[0].text + '</p> </div>');
    },
    error: function (data) {
      throw 'chatterbox: Failed to send message';
    }
  });
};

app.update = function() {
  app.append(app.chatLog[0]);
}

app.clearMessages = function (){

};

var message = {
  username: 'ben',
  text: '<div>test</div>',
  roomname: '4chan'
};

function escapeHtml(text) {
 var map = {
   '&': '&amp;',
   '<': '&lt;',
   '>': '&gt;',
   '"': '&quot;',
   "'": '&#039;'
 };

 return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

