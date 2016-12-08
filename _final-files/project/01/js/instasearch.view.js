(function instaSearchView() {
  instasearch.view = function(resultsArray) {

    // this is a sample object
    // that the instagram API
    // will return to us
    var sampleTweet = {
      "image": "http://pbs.twimg.com/media/CzI1IrNUcAEA0FA.jpg",
      "username": "AlmotwakilMotor",
      "text": "Yolo",
      "tweet_url": "https://twitter.com/statuses/806765710168846336"
    };

    console.log(sampleTweet);

    // Add your imageTemplate() function here
    function imageTemplate(sampleTweet) {
      var resultHTML = '<div class="card">';                      // opening parent DIV
      resultHTML += '<img src="';                                 // opening img tag
      resultHTML += sampleTweet.image;                                  // image url
      resultHTML += '" class="card-img-top img-fluid"'
      resultHTML += '/>';                                         // closing img tag
      resultHTML += '</div>';                                     // closing parent DIV
      return resultHTML;
    }

    // Call function here
    console.log(imageTemplate(sampleTweet));

  };

  instasearch.view();
})();
