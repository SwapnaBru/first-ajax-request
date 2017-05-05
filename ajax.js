$(function () {
// $('').on('click', function(){
//   console.log('Before.ajax');

  /* Your code goes here */
  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/',
    method: 'GET',
    data: 'text',
        // dataType: _____
      }).done(function(data) {
            console.log('.ajax done')
            $('body').append(data);
          }).fail(function(jqXHR, textStatus) {
            console.log('.ajax FAILED with ' + jqXHR.status + ' ' + jqXHR.statusText);
            console.log(jqXHR);
          }).always(function() {
            console.log('.ajax request finished');
          });

          console.log('After .ajax');
        });

        $('#step3456').on('click', function(){
          $ajax({
            url:'http://first-ajax-api.herokuapp.com/ping',
            method: 'GET',
            dataType: 'text'
          }).done(function(){
            console.log('.ajax done')
            $('#step3456').append('<p>' + data + '</p>');
          }).fail(function(){
            $('#step3456').append('<p> ERROR: Could not connect to Pond </p>');
          }).always(function(){
            console.log('.ajax request finished')
          });
        });
