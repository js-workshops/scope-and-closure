(function instaSearchView() {
  instasearch.view = function(resultsArray) {

    function formatResults(dataArray) {
      var resultHTML = '';
      
      // Add your imageTemplate() function here
      function imageTemplate(imagesObject) {
        var imageUrl = imagesObject.images.standard_resolution.url; // store the image url
        var resultHTML = '<div class="col-sm-6 col-md-4">';         // opening parent DIV
        resultHTML += '<div class="thumbnail">';                    // opening img wrapper
        resultHTML += '<img src="';                                 // opening img tag
        resultHTML += imageUrl;                                     // image url
        resultHTML += '">';                                         // closing img tag
        resultHTML += '</div>';                                     // closing img wrapper
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