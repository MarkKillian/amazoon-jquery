$(document).ready(function(){
  
  $('form.order-form').on('submit', function(event){
  event.preventDefault();

  var isValid = true;

  $('input[required]').each(function() {
    if ($(this).val().length > 0){
      $(this).parent().removeClass('has-error')
      } else {
      $(this).parent().addClass('has-error')
      isValid = false;
      }
    });

    if (isValid === false) {
      $('.error-message').show();
    } else {
      $('.error-message').hide();
      $('.has-error').removeClass;
      alert('Success!');
    }
     
  });
});
