/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$().ready(() => {
  const escape = function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const renderTweets = function(tweets) {
    tweets.forEach(tweet => {
      const $tweet = createTweetElement(tweet);
      $('#tweet-container').prepend($tweet);
    });
    // Update the time display using the timeago library
    $('p.time').each(function() {
      $(this).text(timeago.format($(this).attr('datetime')));
    });
  }


  const createTweetElement = function(tweet) {
    let $tweet = $(`
      <article class="tweet">
        <header>
          <p><img src=${escape(tweet.user.avatars)}>${escape(tweet.user.name)}</p>
          <p>${escape(tweet.user.handle)}</p>
        </header>
        <p>${escape(tweet.content.text)}</p>
        <footer>
          <p class="time" datetime="${new Date(tweet.created_at)}">${new Date(tweet.created_at)}</p>
          <div>
            <i class="fa-solid fa-flag"></i>
            <i class="fa-solid fa-retweet"></i>
            <i class="fa-solid fa-heart"></i>
          </div>
        </footer>
      </article>
    `);
    return $tweet;
  }

  const loadTweets = function() {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      dataType: 'json'
    })
    .then(function(response) {
      renderTweets(response);
    })
    .catch(function(error) {
      console.log('Error loading tweets:', error);
    });
  }

  $('form').submit(function(event) {
    // Prevent default form submission
    event.preventDefault();
    // Serialize form data
    const formData = $(this).serialize();


    // Validate tweet content
    const tweetContent = $(this).find('textarea[name="text"]').val();
    // console.log(tweetContent)
    if (!tweetContent || tweetContent.length > 140) {
      let errorMessage;
      if (!tweetContent) {
        errorMessage = "Tweet content is not present";
      } else {
        errorMessage = "Tweet content is too long";
      }
      // Show error message
      // $(this).find('.error').text(errorMessage);
      alert(errorMessage);
      return;
    }
    // Clear error message
    $(this).find('.error').text('');
    // Send AJAX POST request to server


    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: formData
    })
    .then(function() {
      console.log('Form data submitted successfully');
      loadTweets();
    })
    .catch(function(error) {
      console.log('Error submitting form data:', error);
    });
  });

  loadTweets();
});
/////////////////////////////
// $().ready(() => {
//   const renderTweets = function(tweets) {
//     tweets.forEach(tweet => {
//       const $tweet = createTweetElement(tweet);
//       $('#tweet-container').prepend($tweet);
//     });
//     // Update the time display using the timeago library
//     $('p.time').each(function() {
//       $(this).text(timeago.format($(this).attr('datetime')));
//     });
//   }


//   const createTweetElement = function(tweet) {
//     let $tweet = $(`
//       <article class="tweet">
//         <header>
//           <p><img src=${tweet.user.avatars}>${tweet.user.name}</p>
//           <p>${tweet.user.handle}</p>
//         </header>
//         <p>${tweet.content.text}</p>
//         <footer>
//           <p class="time" datetime="${new Date(tweet.created_at)}">${new Date(tweet.created_at)}</p>
//           <div>
//             <i class="fa-solid fa-flag"></i>
//             <i class="fa-solid fa-retweet"></i>
//             <i class="fa-solid fa-heart"></i>
//           </div>
//         </footer>
//       </article>
//     `);
//     return $tweet;
//   }

//   const loadTweets = function() {
//     $.ajax({
//       url: '/tweets',
//       method: 'GET',
//       dataType: 'json'
//     })
//     .then(function(response) {
//       renderTweets(response);
//     })
//     .catch(function(error) {
//       console.log('Error loading tweets:', error);
//     });
//   }

// $('form').submit(function(event) {
//   // Prevent default form submission
//   event.preventDefault();
//   // Serialize form data
//   const formData = $(this).serialize();


//   // Validate tweet content
//   const tweetContent = $(this).find('textarea[name="text"]').val();
//   // console.log(tweetContent)
//   if (!tweetContent || tweetContent.length > 140) {
//     let errorMessage;
//     if (!tweetContent) {
//       errorMessage = "Tweet content is not present";
//     } else {
//       errorMessage = "Tweet content is too long";
//     }
//     // Show error message
//     // $(this).find('.error').text(errorMessage);
//     alert(errorMessage);
//     return;
//   }
//   // Clear error message
//   $(this).find('.error').text('');
//   // Send AJAX POST request to server


//   $.ajax({
//     url: '/tweets',
//     method: 'POST',
//     data: formData
//   })
//   .then(function() {
//     console.log('Form data submitted successfully');
//     loadTweets();
//   })
//   .catch(function(error) {
//     console.log('Error submitting form data:', error);
//   });
// });

// loadTweets();

// });

//////////////////////////////////////////////
// $().ready(() => {
//   const renderTweets = function(tweets) {
//     tweets.forEach(tweet => {
//       const $tweet = createTweetElement(tweet);
//       $('#tweet-container').prepend($tweet);
//     });
//     // Update the time display using the timeago library
//     $('p.time').each(function() {
//       $(this).text(timeago.format($(this).attr('datetime')));
//     });
//   }

//   const createTweetElement = function(tweet) {
//     let $tweet = $(`
//       <article class="tweet">
//         <header>
//           <p><img src=${tweet.user.avatars}>${tweet.user.name}</p>
//           <p>${tweet.user.handle}</p>
//         </header>
//         <p>${tweet.content.text}</p>
//         <footer>
//           <p class="time" datetime="${new Date(tweet.created_at)}">${new Date(tweet.created_at)}</p>
//           <div>
//             <i class="fa-solid fa-flag"></i>
//             <i class="fa-solid fa-retweet"></i>
//             <i class="fa-solid fa-heart"></i>
//           </div>
//         </footer>
//       </article>
//     `);
//     return $tweet;
//   }

//   const loadTweets = function() {
//     $.ajax({
//       url: '/tweets',
//       method: 'GET',
//       dataType: 'json'
//     })
//     .then(function(response) {
//       renderTweets(response);
//     })
//     .catch(function(error) {
//       console.log('Error loading tweets:', error);
//     });
//   }

//   // Add event listener for form submit
//   $('form').submit(function(event) {
//     // Prevent default form submission
//     event.preventDefault();
//     // Serialize form data
//     const formData = $(this).serialize();
//     // Send AJAX POST request to server
//     $.ajax({
//       url: '/tweets',
//       method: 'POST',
//       data: formData
//     })
//     .then(function() {
//       console.log('Form data submitted successfully');
//       loadTweets();
//     })
//     .catch(function(error) {
//       console.log('Error submitting form data:', error);
//     });
//   });

// });
/////////////////////////////////
// $().ready(() => {
//   const data = [
//     {
//       "user": {
//         "name": "Newton",
//         "avatars": "https://i.imgur.com/73hZDYK.png",
//         "handle": "@SirIsaac"
//       },
//       "content": {
//         "text": "If I have seen further it is by standing on the shoulders of giants"
//       },
//       "created_at": 1461116232227
//     },
//     {
//       "user": {
//         "name": "Descartes",
//         "avatars": "https://i.imgur.com/nlhLi3I.png",
//         "handle": "@rd"
//       },
//       "content": {
//         "text": "Je pense , donc je suis"
//       },
//       "created_at": 1461113959088
//     }
//   ]

//   const renderTweets = function(tweets) {
//     tweets.forEach(tweet => {
//       const $tweet = createTweetElement(tweet);
//       $('#tweet-container').append($tweet);
//     });
//   }

//   const createTweetElement = function(tweet) {
//     let $tweet = $(`
//       <article class="tweet">
//         <header>
//           <p><img src=${tweet.user.avatars}>${tweet.user.name}</p>
//           <p>${tweet.user.handle}</p>
//         </header>
//         <p>${tweet.content.text}</p>
//         <footer>
//           <p>${new Date(tweet.created_at).toLocaleString()}</p>
//           <div>
//             <i class="fa-solid fa-flag"></i>
//             <i class="fa-solid fa-retweet"></i>
//             <i class="fa-solid fa-heart"></i>
//           </div>
//         </footer>
//       </article>
//     `);
//     return $tweet;
//   }

//   // Add event listener for form submit
//   $('form').submit(function(event) {
//     // Prevent default form submission
//     event.preventDefault();
//     // Serialize form data
//     const formData = $(this).serialize();
//     // Send AJAX POST request to server
//     $.ajax({
//       url: '/tweets',
//       method: 'POST',
//       data: formData
//     })
//     .then(function() {
//       console.log('Form data submitted successfully', data);
//     })
//     .catch(function(error) {
//       console.log('Error submitting form data:', error);
//     });
//   });

//   renderTweets(data);
// });
////////////////////////////////////////////////
// $().ready(() => {
//   const data = [
//     {
//       "user": {
//         "name": "Newton",
//         "avatars": "https://i.imgur.com/73hZDYK.png"
//         ,
//         "handle": "@SirIsaac"
//       },
//       "content": {
//         "text": "If I have seen further it is by standing on the shoulders of giants"
//       },
//       "created_at": 1461116232227
//     },
//     {
//       "user": {
//         "name": "Descartes",
//         "avatars": "https://i.imgur.com/nlhLi3I.png",
//         "handle": "@rd" },
//       "content": {
//         "text": "Je pense , donc je suis"
//       },
//       "created_at": 1461113959088
//     }
//   ]
  
//   const renderTweets = function(tweets) {
//     tweets.forEach(tweet => {
//       const $tweet = createTweetElement(tweet);
//       $('#tweet-container').append($tweet);
//     });
//   }

//   const createTweetElement = function(tweet) {
//     let $tweet = $(`
//     <article class="tweet">
//       <header>
//       <p><img src=${tweet.user.avatars}>${tweet.user.name}</p>
//         <p>${tweet.user.handle}</p>
//       </header>
//       <p>${tweet.content.text}</p>
//       <footer>
//       <p>${new Date(tweet.created_at).toLocaleString()}</p>
//         <div>
//               <i class="fa-solid fa-flag"></i>
//               <i class="fa-solid fa-retweet"></i>
//               <i class="fa-solid fa-heart"></i>
//             </div>
//       </footer>
//     </article>
//     `);
//     return $tweet;
//     }

//     $()

  
//   renderTweets(data);
//   });

//////////////////////////////////////
// $().ready(() => {
//   const tweetData = {
//     "user": {
//       "name": "Newton",
//       "avatars": "https://i.imgur.com/73hZDYK.png",
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   };
  
//   const $tweet = $(`
//     <article class="tweet">
//       <header>
//       <p><img src="${tweetData.user.avatars}">${tweetData.user.name}</p>
//         <p>${tweetData.user.handle}</p>
//       </header>
//       <p>${tweetData.content.text}</p>
//       <footer>
//       <p>${new Date(tweetData.created_at).toLocaleString()}</p>
//         <div>
//               <i class="fa-solid fa-flag"></i>
//               <i class="fa-solid fa-retweet"></i>
//               <i class="fa-solid fa-heart"></i>
//             </div>
//       </footer>
//     </article>
//   `);

//   console.log($tweet); 
//   $('#tweet-container').append($tweet);
// });






////////////////////////////////////////////////
// texteare practice
// $().ready(() => {


//   // Input event listener
//   $('#textarea').on('input', function(event) {
//     console.log('Input event happened!');
//     // console.log(event);
//   });
 
//   // Input event listener
//   $('#textarea').on('blur', function(event) {
//     console.log('focus event happened!');
//     // console.log(event);
//   });

//   // Input event listener
//   $('#textarea').on('focus', function(event) {
//     console.log('focus event happened!');
//     // console.log(event);
//   });
 
//   // Input event listener
//   $('#textarea').hover(
//     (event) => {console.log('handlerIn')},
//     (event) => {console.log('handlerOut')}
//      )
  

//   // Keyup event listener
//   $('#textarea').on('keyup', function(event) {
//     console.log('Keyup event happened!');
//     // console.log(event);
//   });

//   // Keypress event listener
//   $('#t#extarea').on('keypress', function(event) {
//     console.log('Keypress event happened!');
//     // console.log(event);
//   });

//   // Keydown event listener
//   $('#textarea').on('keydown', function(event) {
//     console.log('Keydown event happened!');
//     // console.log(event);
//   });
// });