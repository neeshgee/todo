console.log("sfdsf");

$(document).ready(function () {

  $('form').on('submit', function(event) {
    event.preventDefault();
    var new_entry = $('#input').val();
    $('#list').append('<li>' + new_entry + '</li>');
  });
});
