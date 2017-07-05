
//Form onInput_change validation

$('#name').on('input', function() {
  let name = $('#name');

  if(name.val().length < 4 && name.val().length != 0) {
    showWarning('#name-danger', '#name-formgroup', '#name-glyphicon');
  } else if (!name.val().length) {
    showNothing('#name-danger', '#name-formgroup', '#name-glyphicon');
  } else {
    showSuccess('#name-danger', '#name-formgroup', '#name-glyphicon');
  }
}); // name input change

$('#message').on('input', function() {
  let message = $('#message');

  if(message.val().length < 10 && message.val().length != 0) {
    showWarning('#message-danger', '#message-formgroup', '#message-glyphicon');
  } else if (!message.val().length) {
    showNothing('#message-danger', '#message-formgroup', '#message-glyphicon');
  } else {
    showSuccess('#message-danger', '#message-formgroup', '#message-glyphicon');
  }
}); // message input change

$('#email').on('input', function() {
  let email = $('#email');
  let patt = /^.+@.+[.].{2,}$/i;

  if(!patt.test(email.val()) && email.val().length != 0) {
    showWarning('#email-danger', '#email-formgroup', '#email-glyphicon');
  } else if (!email.val().length) {
    showNothing('#email-danger', '#email-formgroup', '#email-glyphicon');
  } else {
    showSuccess('#email-danger', '#email-formgroup', '#email-glyphicon');
  }
}); // email input change

// Form handler

$('#form').submit(function(event) {
  event.preventDefault();
  validationCheck();
  if (validationCheck()) submitForm();

});

// validation icons
function showWarning(){
  $(arguments[0]).addClass('hidden'); // hiding input danger text
  $(arguments[1]).removeClass('has-success has-error').addClass('has-warning'); // input border warning
  $(arguments[2]).removeClass('hidden glyphicon-ok glyphicon-remove').addClass('glyphicon-warning-sign'); // showing warning glyphicon
} //showing warning items
function showSuccess() {
  $(arguments[0]).addClass('hidden'); // hiding input danger text
  $(arguments[1]).removeClass('has-warning has-error').addClass('has-success'); //input border success
  $(arguments[2]).removeClass('hidden glyphicon-warning-sign glyphicon-remove').addClass('glyphicon-ok'); // hiding glyphicon
} //showing success items
function showDanger() {
  $(arguments[0]).removeClass('has-warning').addClass('has-error'); // input border danger
  $(arguments[1]).removeClass('hidden glyphicon-warning-sign').addClass('glyphicon-remove'); // show danger glyphicon
  $(arguments[2]).removeClass('hidden'); // show text danger
} //showing danger items
function showNothing() {
  $(arguments[0]).addClass('hidden'); // hiding input danger text
  $(arguments[1]).removeClass('has-warning has-error has-success'); //input border ordinary
  $(arguments[2]).addClass('hidden'); // hiding glyphicon

} // showing no items

// Form onSubmit_submit validation
function validationCheck() {
  let name = $('#name');
  let email = $('#email');
  let message = $('#message');
  let patt = /^.+@.+[.].{2,}$/i;
  let a = true;

  if(name.val().length < 4) {
    showDanger('#name-formgroup', '#name-glyphicon', '#name-danger');
    a = false;
  }

  if(message.val().length < 10) {
    showDanger('#message-formgroup', '#message-glyphicon', '#message-danger');
    a = false;
  }

  if(!patt.test(email.val()) ) {
    showDanger('#email-formgroup', '#email-glyphicon', '#email-danger');
    a = false;
  }

  return a;
}

// Post to handler
function submitForm() {

  let message = $('#message').val();
  let name = $('#name').val();
  let email = $('#email').val();
  let website = $('#website').val();

  $.ajax({
    type: 'POST',
    url: '../formProcessor.php',
    data: '&name=' + name + '&email='+ email + '&message='+ message + '&website='+ website,

    success : function() {
      if(true){
        formSuccess();
      } else {
        formError();
      }
    }
  });

}

// modal windows show and clear field
function  formSuccess(){
  $('#message').val('');
  $('#name').val('');
  $('#email').val('');
  $('#website').val('');

  $( '#contactsmodal').modal('show');
}
function  formError(){
  $('#error').modal('show');
}
