$(document).ready(function () {

  $('form').on('submit', function(event) {
    event.preventDefault();
    var new_entry = $('#input').val();
    $('#list').append('<li><input type="checkbox" class="checkbox" />' + new_entry + '</li>');
    $('#input').val('');
  });

  $('#list').on('click', 'input.checkbox' ,function (event) {
    var li = $(this).closest('li');

    if (this.checked) {
      $('#completelist').append('<li>' + li.text() + '</li>');
      li.hide();
    }
  })
});
