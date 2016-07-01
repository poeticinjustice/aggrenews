'use strict'
$(document).ready(function() {
  console.log('loaded');
});

let content_search = 'clinton';

$.ajax({
  url: '/key/guardian',
  dataType: 'json',
  success: function (data) {
    var results = data.response.results;
    $(results).each(function(index){
      var content = results[index];
      $('.newsitem ul').append(
        $('<li />', {text: 'Date: ' + content.webPublicationDate})
      );
      $('.newsitem ul').append(
        $('<li />', {text: 'Article: ' + content.webTitle})
      );
      $('.newsitem ul').append(
        $('<li />', {text: 'URL: ' + content.webUrl})
      );
    });
  },
  error: function () {
    $(".newsitem").html('<p>Error: ' + error + '</p>');
  }
});

$.ajax({
  url: '/key/nyt',
  dataType: 'json',
  success: function (data) {
    var results = data.response.docs;
    $(results).each(function(index){
      var content = results[index];
      $('.newsitem ul').append(
        $('<li />', {text: 'Date: ' + content.pub_date})
      );
      $('.newsitem ul').append(
        $('<li />', {text: 'Article: ' + content.headline.main})
      );
      $('.newsitem ul').append(
        $('<li />', {text: 'URL: ' + content.web_url})
      );
    });
  },
  error: function () {
    $(".newsitem").html('<p>Error: ' + error + '</p>');
  }
});

