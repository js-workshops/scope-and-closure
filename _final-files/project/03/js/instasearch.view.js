(function instaSearchView() {
  instasearch.view = function(resultsArray) {

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
    var results = formatResults(resultsArray);
    $("#searchResults").html(results);
  };

})();
