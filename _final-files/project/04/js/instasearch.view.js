(function instaSearchView() {
  instasearch.view = function(resultsArray) {

    function formatResults(dataArray) {
      var resultHTML = '';

      // Add your imageTemplate() function here
      function imageTemplate(tweet) {
        var resultHTML = '<div class="card">';                      // opening parent DIV
        resultHTML += '<img src="';                                 // opening img tag
        resultHTML += tweet.image;                                  // image url
        resultHTML += '" class="card-img-top img-fluid"'
        resultHTML += '">';                                         // closing img tag
        resultHTML += '</div>';                                     // closing parent DIV
        return resultHTML;
      }

      for(var i = 0; i < dataArray.length; i++) {
        resultHTML += imageTemplate(dataArray[i]);
      }
      return resultHTML;
    }

    var results = formatResults(resultsArray);
    $("#searchResults").html(results);

  };


})();