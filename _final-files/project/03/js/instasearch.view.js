(function instaSearchView() {
  instasearch.view = function(resultsArray) {

    // this is a sample array
    var sampleArray = [{images:{low_resolution:{url:"https://2vyk4sqq0.igsonar.com/hphotos-ak-xaf1/t51.2885-15/s306x306/e15/11093074_423356687833105_1178379884_n.jpg",width:306,height:306},thumbnail:{url:"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s150x150/e15/11093074_423356687833105_1178379884_n.jpg",width:150,height:150},standard_resolution:{url:"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/11093074_423356687833105_1178379884_n.jpg",width:640,height:640}}},{images:{low_resolution:{url:"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s306x306/e15/11111283_853666244722658_1067200035_n.jpg",width:306,height:306},thumbnail:{url:"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s150x150/e15/11111283_853666244722658_1067200035_n.jpg",width:150,height:150},standard_resolution:{url:"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/11111283_853666244722658_1067200035_n.jpg",width:640,height:640}}}];

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