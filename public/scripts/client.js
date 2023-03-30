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
    $('#tweet-container').empty()
    tweets.forEach(tweet => {
      const $tweet = createTweetElement(tweet);
      $('#tweet-container').prepend($tweet);
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
          <p class="time">${timeago.format(tweet.created_at)}</p>
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


  $(".error").hide();

  // handle form submission
  $("form").on("submit", function(event) {
    event.preventDefault();
    var tweet = $("textarea").val();

    // validate tweet length
    if (tweet.length > 140) {
      // show error message with slide animation
      $(".error").text("Your tweet is too long!").slideDown();
    } else if (tweet.length === 0) {
      // show error message with slide animation
      $(".error").text("You haven't entered anything!").slideDown();
    } else {
      // hide error message if it's visible
      $(".error").slideUp();
      // submit form data
      $.ajax({
        method: "POST",
        url: "/tweets",
        data: $(this).serialize()
      })
      .then(function() {
        // reload tweets and clear input field
        loadTweets();
        $("textarea").val("");
        $(".counter").val('140');
      })
      .catch(function(error) {
        console.log(error);
      });
    }
  });

  loadTweets();
});
