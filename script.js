let total_cost = 0;

//event handlers
$(document).ready(() => {
$('form').attr('novalidate', true); //disable automatic form validation
$("#nameField").focus();
$('#other-title').hide(); //add the "Other" option to the Job Role Section
$('#colors-js-puns').hide();//colorDiv, hide the color label and select menu when page loads
$('#payment').val('credit card'); //default payment method to CC
$('credit-card ~div').each(function() {
    $(this).hide(); //hide "PayPal" and "Bitcoin" payment methods
});
$('option[value="select_method"]').attr('disabled', true); //disable the "select pymt method"
})

???
const $punColors = $('#color option:lt(3)'); // select all elements at an index less than index w/I the matched set
const $heartColors = $('#color option: gt(2)');// select all elements at an index greater than index w/I the matched set


//should i use this 
$otherTitle.on('change' , function() {
    if ($('#title option:selected').text() === 'Other' ) {
        $otherTitle.show();
    } else {
        $otherTitle.hide();
    }
});
or 
$('#title').on('change', function(e){
    if($(e.target).val() ==='other') {
        $('#other-title').show();
    } else {
        $('#other-title').hide();
    }
});
/*T-Shirt section */

$('#design').on('change', function (e) {  //can i omit the word function
    $allColors.detach /* Detach-removes all child elements with selected elements. Even though it keeps all data and event handlers of the removed element.
    This method is preferred to remove elements but it keeps a copy of the removed elements which we can reuse at a later time. */
$('colors-js-puns').show();
if($('#design').val() ==='js puns') {
    //hide the colors tomato, steelblue, and dimgrey
    $('#color option').each(function(){
        if($(this).val() === 'tomato' || $(this).val() ==='steelblue' || 
        $(this).hide(); 
    } else {
        $(this).show();
         
        //set placeholder for color menu to cornflower
        $('option[value="cornflowerblue"]').attr('selected', true);
        
        if(typeof $('option[value="tomato"]').attr('selected') !==
        typeofundefined &&
        $('option[value="tomato"]).removeAttr('selected'); 
        }
     } 
});
} else if($('#design').val() === 'heart js') {
    //hide the colors cornflowerblue, darkslategrey and gold
    $('#color option').each(function() {
      if($(this).val() === 'cornflowerblue' ||
        $(this).val() === 'darkslategrey' || $(this).val() === 'gold') {
          $(this).hide();
      } else {
        //show the colors tomato, steelblue and dimgrey
        $(this).show();
        //set placeholder for color menu to tomato
        $('option[value="tomato"]').attr('selected', true);
        
        if(typeof $('option[value="cornflowerblue"]').attr('selected') !==
          typeof undefined &&
          $('option[value="cornflowerblue"]').attr('selected') !== false) {
            $('option[value="cornflowerblue"]').removeAttr('selected');
        }
      }
    });
  } else {
    //if the user selects 'Select Theme' then reset the color menu
    $('#color option').each(function() {
      $(this).show();
      $('#colors-js-puns').hide();
    });
  }
});


/* Activity Registration: Cannot select two activities at the same time */
$('.activities input').on('change', function() {
    const regex = /\d{3}/;
    const label_text = $(this).closet('label').text();
    const cost = label_text.match(regex);
    if($(this).is(':checked')) {
        if($(this).attr('name') === 'js-frameworks') {
            $('input[name="express"]').attr('disabled', true)
              .closest('label').css('textDecoration', 'line-through');
          } else if($(this).attr('name') === 'express') {
            $('input[name="js-frameworks"]').attr('disabled', true)
              .closest('label').css('textDecoration', 'line-through');
          } else if($(this).attr('name') === 'js-libs') {
            $('input[name="node"]').attr('disabled', true)
              .closest('label').css('textDecoration', 'line-through');
          } else if($(this).attr('name') === 'node') {
            $('input[name="js-libs"]').attr('disabled', true)
              .closest('label').css('textDecoration', 'line-through');
          }
          total_cost += parseInt(cost[0]);
        } else { //if change causes uncheck
          //check for conflicting times, if necessary enable checkboxes and turn
          //text color back to black
          if($(this).attr('name') === 'js-frameworks') {
            $('input[name="express"]').removeAttr('disabled')
              .closest('label').css('textDecoration', 'none');
          } else if($(this).attr('name') === 'express') {
            $('input[name="js-frameworks"]').removeAttr('disabled')
              .closest('label').css('textDecoration', 'none');
          } else if($(this).attr('name') === 'js-libs') {
            $('input[name="node"]').removeAttr('disabled')
              .closest('label').css('textDecoration', 'none');
          } else if($(this).attr('name') === 'node') {
            $('input[name="js-libs"]').removeAttr('disabled')
              .closest('label').css('textDecoration', 'none');
          }
          total_cost -= parseInt(cost[0]);
        }
        //generate total cost
        if(total_cost > 0) {
          $('.activities').append('<div id="total_cost"></div>');
          $('#total_cost').text(`Total Cost: \$${total_cost}`)
          //delete error message if user tried to previously submit the form without
          //selecting an activity
          if($('#error-message').length) {
            $('#error-message').remove();
          }
        } else { //remove the total cost message if the user deselects all activities
          $('#total_cost').remove();
        }
      });
      
      //"Payment Info" section:
      //select the payment select element
      $('#payment').on('change', function() {
        //payment_info = [credit card, PayPal, Bitcoin]
        const payment_info = $('#payment ~ div');
        //show the information that is appropriate for the selected payment method
        if($(this).val() === 'credit card') { //credit card
          $(payment_info[0]).show();
          $(payment_info[1]).hide();
          $(payment_info[2]).hide();
        } else if($(this).val() === 'paypal') { //PayPal
          $(payment_info[0]).hide();
          $(payment_info[1]).show();
          $(payment_info[2]).hide();
        } else if($(this).val() === 'bitcoin') { //Bitcoin
          $(payment_info[0]).hide();
          $(payment_info[1]).hide();
          $(payment_info[2]).show();
        }
      });
      
      //Form Validation:
      //function to validate name field
      function validateName() {
        //name field - can't be blank
        //regex pattern for non-blank text string:
        const regex = /^[A-Za-z '-]+$/;
        const input = $('#name').val();
        //if the string contains the pattern, then the name field isn't blank
        if(regex.test(input)) {
          //return input to default style if the user enters the proper input
          $('#name').removeAttr('style');
          //remove any error messages
          $('#name-blank-error').remove();
          $('#name-length-error').remove();
          //name is valid
          return true;
        } else { //otherwise, the name field is in error
          $('#name')
            .css({'border': 'solid 2px #e8a29d', 'backgroundColor': '#e8a29d'});
          //real time error messages
          if(!input.trim()) {
            //name field is empty
            $('label[for="name"]')
              .append('<span id="name-blank-error" style="color:firebrick"> ' +
              'name field can not be blank</span>');
            //remove other error message if it exists
            if($('#name-length-error').length) {
              $('#name-length-error').remove();
            }
          } else { //name field contains non-alphabetic characters
            $('label[for="name"]')
              .append('<span id="name-length-error" style="color:firebrick"> ' +
              'name field must contain only alphabetic characters</span>');
            //remove other error message if it exists
            if($('#name-blank-error').length) {
              $('#name-blank-error').remove();
            }
          }
          //name field is not valid
          return false;
        }
      }
      
      //function to validate the email field
      function validateEmail() {
        //email field - must be a validly formatted email address (abc@example.com)
        //regex pattern for properly formatted email address:
        const regex = /^[\w\.-_]+@\w+\.(com|net|org|edu)$/i;
        const input = $('#mail').val();
        //if the string contains the pattern, then the email field contains a
        //properly formatted email address
        if(regex.test(input)) {
          //return input to default style if the user enters the proper input
          $('#mail').removeAttr('style');
          //remove any error messages
          $('#mail-blank-error').remove();
          $('#mail-format-error').remove();
          //email field is valid
          return true;
        } else { //otherwise the email field is in error
          $('#mail')
            .css({'border': 'solid 2px #e8a29d', 'backgroundColor': '#e8a29d'});
          //real time error messages
          if(!input.trim()) {
            //email field is empty
            //don't generate the message again if it already exists
            if($('#mail-blank-error').length === 0) {
              $('label[for="mail"]')
                .append('<span id="mail-blank-error" style="color:firebrick"> ' +
                '<br>mail field can not be blank</span>');
            }
            //remove other error message if it exists
            if($('#mail-format-error').length) {
              $('#mail-format-error').remove();
            }
          } else { //email field isn't properly formatted
            //don't generate the message again if it already exists
            if($('#mail-format-error').length === 0) {
              $('label[for="mail"]')
                .append('<span id="mail-format-error" style="color:firebrick"> ' +
                '<br>mail field must be properly formatted (ex. abc@example.com) ' +
                'and can only contain letters, numbers, periods, dashes or ' +
                'underscores</span>');
            }
            //remove other error message if it exists
            if($('#mail-blank-error').length) {
              $('#mail-blank-error').remove();
            }
          }
          //email field is not valid
          return false;
        }
      }
      
      function validateCreditCardNumber() {
        //regex pattern for a number that is between 13-16 digits long
        let regex = /^(\d{13}|\d{14}|\d{15}|\d{16})$/;
        const input = $('#cc-num').val();
        //if the input contains the pattern then the credit card number is between
        //13-16 digits long
        if(regex.test(input)) {
          //return input to default style if the user enters the proper input
          $('#cc-num').removeAttr('style');
          //remove any error messages
          $('#ccnum-blank-error').remove();
          $('#ccnum-length-error').remove();
          //credit card number is valid
          return true;
        } else { //otherwise the credit card number field is in error
          $('#cc-num')
            .css({'border': 'solid 2px #e8a29d', 'backgroundColor': '#e8a29d'});
          //real time error message should go here
          if(!input.trim()) {
            //credit card number field is empty
            //don't generate the message again if it already exists
            if($('#ccnum-blank-error').length === 0) {
              $('label[for="cc-num"]')
                .append('<span id="ccnum-blank-error" style="color:firebrick"> ' +
                '<br>credit card number field can not be blank</span>');
            }
            //remove other error message if it exists
            if($('#ccnum-length-error').length) {
              $('#ccnum-length-error').remove();
            }
          } else { //credit card field isn't between 13-16 digits long
            //don't generate the message again if it already exists
            if($('#ccnum-length-error').length === 0) {
              $('label[for="cc-num"]')
                .append('<span id="ccnum-length-error" style="color:firebrick"> ' +
                '<br>credit card number must be between 13-16 digits long and ' +
                'only consist of numbers</span>');
            }
            //remove other error message if it exists
            if($('#ccnum-blank-error').length) {
              $('#ccnum-blank-error').remove();
            }
          }
          //credit card number is not valid
          return false;
        }
      };
      
      function validateZipCode() {
        //regex pattern for a number that is 5 digits long
        let regex = /^\d{5}$/;
        const input = $('#zip').val();
        //if the input contains the pattern then the zip code is 5 digits long
        if(regex.test(input)) {
          //return input to default style if the user enters the proper input
          $('#zip').removeAttr('style');
          //remove any error messages
          $('#zip-blank-error').remove();
          $('#zip-length-error').remove();
          //zip code is valid
          return true;
        } else { //otherwise the zip code field is in error
          $('#zip')
            .css({'border': 'solid 2px #e8a29d', 'backgroundColor': '#e8a29d'});
          //real time error message should go here
          if(!input.trim()) {
            //zip code field is empty
            //don't generate the message again if it already exists
            if($('#zip-blank-error').length === 0) {
              $('label[for="zip"]')
                .append('<span id="zip-blank-error" style="color:firebrick"> ' +
                '<br>zip code field can not be blank</span>');
            }
            //remove other error message if it exists
            if($('#zip-length-error').length) {
              $('#zip-length-error').remove();
            }
          } else { //credit card field isn't between 13-16 digits long
            //don't generate the message again if it already exists
            if($('#zip-length-error').length === 0) {
              $('label[for="zip"]')
                .append('<span id="zip-length-error" style="color:firebrick"> ' +
                '<br>zip code must be exactly 5 digits long and only consist ' +
                'of numbers</span>');
            }
            //remove other error message if it exists
            if($('#zip-blank-error').length) {
              $('#zip-blank-error').remove();
            }
          }
          //zip code is not valid
          return false;
        }
      };
      
      function validateCVV() {
        //regex pattern for a number that is 3 digits long
        let regex = /^\d{3}$/;
        const input = $('#cvv').val();
        //if the input contains the pattern then the cvv number is 3 digits long
        if(regex.test(input)) {
          //return input to default style if the user enters the proper input
          $('#cvv').removeAttr('style');
          //remove any error messages
          $('#cvv-blank-error').remove();
          $('#cvv-length-error').remove();
          //cvv number is valid
          return true;
        } else { //otherwise the cvv number field is in error
          $('#cvv')
            .css({'border': 'solid 2px #e8a29d', 'backgroundColor': '#e8a29d'});
          //real time error message should go here
          if(!input.trim()) {
            //credit card number field is empty
            //don't generate the message again if it already exists
            if($('#cvv-blank-error').length === 0) {
              $('label[for="cvv"]')
                .append('<span id="cvv-blank-error" style="color:firebrick"> ' +
                '<br>cvv number field can not be blank</span>');
            }
            //remove other error message if it exists
            if($('#cvv-length-error').length) {
              $('#cvv-length-error').remove();
            }
          } else { //credit card field isn't between 13-16 digits long
            //don't generate the message again if it already exists
            if($('#cvv-length-error').length === 0) {
              $('label[for="cvv"]')
                .append('<span id="cvv-length-error" style="color:firebrick"> ' +
                '<br>cvv number must be exactly 3 digits long and only consist ' +
                'of numbers</span>');
            }
            //remove other error message if it exists
            if($('#cvv-blank-error').length) {
              $('#cvv-blank-error').remove();
            }
          }
          //cvv number is not valid
          return false;
        }
      }
      
      //function to validate "Register for Activities" section
      function validateActivities() {
        let isValid = false;
        //user must select at least one checkbox under the "Register for Activities"
        //section
        //select the activities checkboxes
        $('.activities input').each(function() {
          //if any of the checkboxes are checked, then there is no error
          if($(this).prop('checked') === true) {
            isValid = true;
          }
        })
        //the "Register for Activities" section has been validated
        if(isValid) {
          return true;
        } else {
          //otherwise the use has not selected an activity, create error message
          //ensure no duplicate error messages are generated
          if($('#error-message').length === 0) {
            $('.activities')
              .append('<div id="error-message" style="color:firebrick">Please ' +
              'select at least one activity to attend</div>');
          }
          //the "Register for Activities" section is not validated,
          //do not submit form
          return false;
        }
      }
      
      //general form submission event handler
      $('form').on('submit', function(e) {
        //flag to determine if the entire form is valid
        let isValid = false;
        //stop the form from submitting
        e.preventDefault();
        //store the form components' validation states
        const checkName = validateName();
        const checkEmail = validateEmail();
        const checkActivities = validateActivities();
        //check to see if the form components are valid
        if(checkName && checkEmail && checkActivities) {
          //name, email and activities components are valid
          isValid = true;
        } else { //one or more of the components are not valid
          isValid = false;
        }
        //if the user selects the "Credit Card" payment method, then validate
        //the user's credit card information
        if($('#payment option:selected').val() === 'credit card') {
          //store the credit card fields' validation states
          const checkCreditCardNumber = validateCreditCardNumber();
          const checkZipCode = validateZipCode();
          const checkCVV = validateCVV();
          //check to see if the credit card fields are valid
          //also ensure that the other form components are valid
          if(checkCreditCardNumber && checkZipCode && checkCVV && isValid) {
            //all credit card fields are valid
            isValid = true;
          } else { //one or more of the credit card fields are not valid
            isValid = false;
          }
        }
        //all of the components are valid, the form can be submitted
        if(isValid) {
          $('form').unbind('submit').submit();
        }
      });
      
      //name field keyup event handler
      $('#name').on('keyup', function() {
        validateName();
      });
      
      //email field keyup event handler
      $('#mail').on('keyup', function() {
        validateEmail();
      });
      
      //credit card fields keyup event handler
      $('#credit-card input').on('keyup', function() {
        //determine which credit card field has focus
        if($(this).attr('id') === 'cc-num') { validateCreditCardNumber(); }
        else if($(this).attr('id') === 'zip') { validateZipCode(); }
        else if($(this).attr('id') === 'cvv') { validateCVV(); }
      });

    }
})



