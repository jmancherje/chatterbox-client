// YOUR CODE HERE:

var app = {};

app.init = function () {
  app.fetch();
}


app.addMessage = function (item){
  var message = item.text ? escapeHtml(item.text) : "";
  var name = item.username ? escapeHtml(item.username) : "";
  $('#chats').append('<div class="chatMessage"> <p class="userName">' 
  + name  + '</p> <p class="messageContent">' 
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
      app.fetch();
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

    app.clearMessages();
    for (var i=0; i<20; i++) {
        app.addMessage(data.results[i]);
      if(!_.contains(app.room,data.results[i].roomname)){
        app.addRoom(data.results[i].roomname);
      }
    }


      
    },
    error: function (data) {
      throw 'chatterbox: Failed to send message';
    }
  });
};

app.rooms = [];

app.addRoom = function (val) {
  // body...
  // populate 10 most recent posts
    if(!_.contains(app.rooms, val)){
      $('#roomSelect').append('<option value="'+ val + '">' + val + '</option>');
      app.rooms.push(val);
    }
};

app.clearMessages = function () {
  $('#chats').children().remove();
}

var message = {
  username: 'purple platypus',
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

app.addFriend = function () {
  console.log('test');
};

app.handleSubmit = function () {
    var messageObj = {
      username: $('#username').val(),
      text : $('#message').val(),
      roomname: $('#roomSelect').val()
    }
    console.log(messageObj);
    app.send(messageObj);
};

$(document).ready(function(){
  app.init();

  $('#chats').on('click', 'p.userName', function () {
    app.addFriend($(this).text());
  });

  $('#main').on('click', '.submit', function (event) {
    event.preventDefault();
    app.handleSubmit();
  });

});




