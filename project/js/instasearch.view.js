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
    // It should take in the SampleImage object and
    // return the following HTML:
    // <div class="card">
    //   <img class="card-img-top img-fluid" src="https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s640x640/sh0.08/e35/11311148_443877009144792_468293480_n.jpg">
    // </div>

    // Call function here

  };

  instasearch.view();
})();
