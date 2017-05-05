$(function () {
$('#ajax_request').on('click', function(){
  console.log('Before.ajax');

  /* Your code goes here */
  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/',
    method: 'GET',
        dataType: 'text'
      }).done(function(data) {
            console.log('.ajax done');
          })

        });

        $('#step3456').on('click', function(){
          $ajax({
            url:'http://first-ajax-api.herokuapp.com/ping',
            method: 'GET',
            dataType: 'text'
          }).done(function(responseData){
            console.log('.ajax done')
            $('#step3456').append(responseData);
          }).fail(function(){
            $('#step3456').append('ERROR: Could not load to Pong');
          }).always(function(){
            console.log('.ajax request finished')
          });
        });

        $('#step7').on('click', fucntion(){
          $ajax({
            url:'http://first-ajax-api.herokuapp.com/count',
            method: 'GET',
            dataType: 'text'
          }).done(function(responseData){
            $('#step7').append(responseData);
          });
        });

        $('#step8').on('click', function(){
          $ajax({
            url:'http://first-ajax-api.herokuapp.com/time',
            method: 'GET',
            data:{ timezone: 'Pacific/Honolulu'},
            dataType: 'text'
          }).done(function(responseData){
            $('#step8').append('<p>' + responseData + '</p>');
        });
        });

        $('#step9').on('click', function(){
          $.ajax({
            url: 'http://first-ajax-api.herokuapp.com/a_car',
            method: 'GET',
            dataType: 'html'
          }).done(function(responseData){
            $('#a_car').append(responseData);
          });
        });



      });











            console.log('After .ajax');
        });
