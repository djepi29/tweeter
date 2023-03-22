$(document).ready(function() {
  
  $('#tweet-text').on('input', function() {
    
    const inputLength = $(this).val().length;
    // const counter = $('.counter');
     const counter = $(this).next().children().eq(1);
     counter.text(140 - inputLength);
     if (inputLength > 140) {
          counter.css('color', 'red');
        } else {
          counter.css('color', '');
        }


//////////////////////////////////////
  // const textLength = $(this).val().length;

  // // Get the counter element and update its value
  // const counter = $('.counter');
  // counter.text(140 - textLength);

  // // Change the color of the counter to red if the count goes negative
  // if (textLength > 140) {
  //   counter.css('color', 'red');
  // } else {
  //   counter.css('color', '');
  // }
});
});


//   // Change the color of the counter to red if the count goes negative
//   if (textLength > 140) {
//     counter.css('color', 'red');
//   } else {
//     counter.css('color', '');
//   }
// })