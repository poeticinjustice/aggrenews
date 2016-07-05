'use strict'
$(document).ready(function() {
  console.log('loaded');


  $('#nytButton').on('click', function(){
    $('#newsitem ul').empty();
    //get value from input
    let input = $('#nytField').val()
    $.ajax({
      url: '/key/nyt?term='+input,
      dataType: 'json',
      success: function (data) {
        var results = data.response.docs;
        $(results).each(function(index){
          var content = results[index];
          $('#newsitem ul').append(
            $('<li />', {html: '<img src="http://nytimes.com/'+content.multimedia[0].url+'" height="80px"><a href="' + content.web_url + '" target="_blank">' + content.headline.main + '</a><br>'+content.snippet})
          );
        });
      },
      error: function () {
        $("#newsitem").html('<p>Error: ' + error + '</p>');
      }
    });
  });

  $('#nytField').keypress(function (e) {
    var key = e.which;
    if(key == 13)  // the enter key code
    {
      $('#newsitem ul').empty();
      let input = $('#nytField').val()
      $.ajax({
        url: '/key/nyt?term='+input,
        dataType: 'json',
        success: function (data) {
          var results = data.response.docs;
          $(results).each(function(index){
            var content = results[index];
              $('#newsitem ul').append(
                $('<li />', {html: '<img src="http://nytimes.com/'+content.multimedia[0].url+'" height="80px"><a href="' + content.web_url + '" target="_blank">' + content.headline.main + '</a><br>'+content.snippet})
              );
            });
          },
          error: function () {
            $("#newsitem").html('<p>Error: ' + error + '</p>');
        }
      });
    }
  });

});

// http://stackoverflow.com/questions/18160342/jquery-how-to-trigger-click-event-on-pressing-enter-key
