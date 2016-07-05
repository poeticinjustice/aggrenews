'use strict'
$(document).ready(function() {
  console.log('loaded');

  $('#newsButton').on('click', function(){
    $('#guardian_column ul').empty();
    //get value from input
    let input = $('#newsField').val()
    $.ajax({
      url: '/key/guardian?term='+input,
      dataType: 'json',
      success: function (data) {
        var results = data.response.results;
        $(results).each(function(index) {
          var content = results[index];
            $('#guardian_column ul').append(
            $('<li />', {html: '<a href="' + content.webUrl + 'target="_blank">'+ content.webTitle +'</a>'})
          );
        });
      },
      error: function () {
        $("#guardian_column").html('<p>Error: ' + error + '</p>');
      }
    });
  });
  $('#newsButton').on('click', function(){
    $('#nyt_column ul').empty();
    //get value from input
    let input = $('#newsField').val()
    $.ajax({
      url: '/key/nyt?term='+input,
      dataType: 'json',
      success: function (data) {
        var results = data.response.docs;
        $(results).each(function(index){
          var content = results[index];
          $('#nyt_column ul').append(
            $('<li />', {html: '<a href="' + content.web_url + '" target="_blank">' + content.headline.main + '</a>'})
          );
        });
      },
      error: function () {
        $("#nyt_column").html('<p>Error: ' + error + '</p>');
      }
    });
  });

  $('#newsField').keypress(function (e) {
    var key = e.which;
    if(key == 13)  // the enter key code
    {
      $('#nyt_column ul').empty();
      let input = $('#newsField').val()
      $.ajax({
        url: '/key/nyt?term='+input,
        dataType: 'json',
        success: function (data) {
          var results = data.response.docs;
          $(results).each(function(index){
            var content = results[index];
              $('#nyt_column ul').append(
                $('<li />', {html: '<a href="' + content.web_url + '" target="_blank">' + content.headline.main + '</a>'})
              );
            });
          },
          error: function () {
            $("#nyt_column").html('<p>Error: ' + error + '</p>');
        }
      });
    }
  });

  $('#newsField').keypress(function (e) {
    var key = e.which;
    if(key == 13)  // the enter key code
    {
      $('#guardian_column ul').empty();
      let input = $('#newsField').val()
      $.ajax({
        url: '/key/guardian?term='+input,
        dataType: 'json',
        success: function (data) {
          var results = data.response.results;
          $(results).each(function(index) {
            var content = results[index];
            $('#guardian_column ul').append(
              $('<li />', {html: '<a href="' + content.webUrl + '" target="_blank">'+ content.webTitle +'</a>'})
            );
          });
        },
        error: function () {
          $("#guardian_column").html('<p>Error: ' + error + '</p>');
        }
      });
    }
  });

});

// http://stackoverflow.com/questions/18160342/jquery-how-to-trigger-click-event-on-pressing-enter-key
