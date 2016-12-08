(function instaSearchView() {
  instasearch.view = function(resultsArray) {

    // this is a sample object
    // that the instagram API
    // will return to us
    var sampleArray = [{"image": "http://pbs.twimg.com/tweet_video_thumb/CzFlu1IUAAEK8dh.jpg",},{"image": "http://pbs.twimg.com/tweet_video_thumb/Cy86TUaXUAAQchw.jpg",},{"image": "http://pbs.twimg.com/tweet_video_thumb/CyzeuZnXAAAQW6P.jpg",},{"image": "http://pbs.twimg.com/tweet_video_thumb/CysFwv0VEAArGUm.jpg",},{"image": "http://pbs.twimg.com/tweet_video_thumb/CyryP_eXgAIO-CV.jpg",},{"image": "http://pbs.twimg.com/tweet_video_thumb/CyrtGt3XAAE0kV_.jpg",},{"image": "http://pbs.twimg.com/tweet_video_thumb/CyoTs5vWgAAmJcQ.jpg",},{"image": "http://pbs.twimg.com/tweet_video_thumb/CylRElQW8AAvjxN.jpg",},{"image": "http://pbs.twimg.com/media/CykudehW8AAZo2G.jpg",},{"image": "http://pbs.twimg.com/tweet_video_thumb/Cygcp4fWEAAns9B.jpg",}];

    function formatResults(dataArray) {
      var resultsHTML = '';
      for(var i = 0; i < dataArray.length; i++) {
        resultsHTML += imageTemplate(dataArray[i]);
      }
      return resultsHTML;
    }

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
    var results = formatResults(sampleArray);
    $("#searchResults").html(results);
  };

  instasearch.view();
})();
