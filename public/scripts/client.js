/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$().ready(() => {
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]
  
  const createTweetElement = function(tweet) {
    let $tweet = $(`
    <article class="tweet">
      <header>
      <p><img src=${tweet.user.avatars}>${tweet.user.name}</p>
        <p>${tweet.user.handle}</p>
      </header>
      <p>${tweet.content.text}</p>
      <footer>
      <p>${new Date(tweet.created_at).toLocaleString()}</p>
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

  const renderTweets = function(tweets) {
    tweets.forEach(tweet => {
      const $tweet = createTweetElement(tweet);
      $('#tweet-container').append($tweet);
    });
  }
  
  renderTweets(data);
  });

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