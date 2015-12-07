// YOUR CODE HERE:

var app = {
  init : function(){$.get('https://api.parse.com/1/classes/chatterbox.jsonp', message)}
};

// var message = {
//   username: 'shawndrost',
//   text: 'trololo',
//   roomname: '4chan'
// };
app.server = 'https://api.parse.com/1/classes/chatterbox';
app.send = function (message) { 
  $.ajax({
    url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'POST',
    data: JSON.stringify(message),
    dataType: 'jsonp',
    contentType: 'application/json',
    success: function (data) {
      console.log('Chatterbox: message sent');
      console.log(data);
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
    dataType: 'jsonp',
    contentType: 'application/json',
    success: function (data) {
      console.log('Chatterbox: message sent');
      console.log(data);
    },
    error: function (data) {
      throw 'chatterbox: Failed to send message';
    }
  });
};