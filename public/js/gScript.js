'use strict'
$(document).ready(function() {
  console.log('loaded');

  $('#gButton').on('click', function(){
    $('#gnewsitem ul').empty();
    //get value from input
    let input = $('#gField').val()
    $.ajax({
      url: '/key/guardian?term='+input,
      dataType: 'json',
      success: function (data) {
        var results = data.response.results;
        $(results).each(function(index) {
          var content = results[index];
            $('#gnewsitem ul').append(
            $('<li />', {html: '<a href="' + content.webUrl + 'target="_blank">'+ content.webTitle +'</a>'})
          );
        });
      },
      error: function () {
        $("#gnewsitem").html('<p>Error: ' + error + '</p>');
      }
    });
  });

  $('#gField').keypress(function (e) {
    var key = e.which;
    if(key == 13)  // the enter key code
    {
      $('#gnewsitem ul').empty();
      let input = $('#gField').val()
      $.ajax({
        url: '/key/guardian?term='+input,
        dataType: 'json',
        success: function (data) {
          var results = data.response.results;
          $(results).each(function(index) {
            var content = results[index];
            $('#gnewsitem ul').append(
              $('<li />', {html: '<a href="' + content.webUrl + '" target="_blank">'+ content.webTitle +'</a>'})
            );
          });
        },
        error: function () {
          $("#gnewsitem").html('<p>Error: ' + error + '</p>');
        }
      });
    }
  });

});

// http://stackoverflow.com/questions/18160342/jquery-how-to-trigger-click-event-on-pressing-enter-key
