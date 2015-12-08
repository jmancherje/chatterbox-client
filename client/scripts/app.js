// YOUR CODE HERE:

var app = {
  init : function () {
    //$.get('https://api.parse.com/1/classes/chatterbox.json', message)
  }
};

var message = {
  username: 'shawndrost',
  text: 'trololo',
  roomname: '4chan'
};

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
      console.log('Chatterbox: message sent');
      console.log(data);
      var recentMessage = data.results[0]
        
      $('#chats').append('<div class="chatMessage"> <p class="userName">' 
        + recentMessage.username  + '</p> <p class="messageContent">' 
        + recentMessage.text + '</p> </div>');
    },
    error: function (data) {
      throw 'chatterbox: Failed to send message';
    }
  });
};

app.clearMessages = function (){
  // debugger;
};