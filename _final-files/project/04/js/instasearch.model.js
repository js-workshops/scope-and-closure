(function instaSearchModel() {
  instasearch.model = function(tag) {

    function handleResults(dataArray) {
      // hook it up to our view function
      console.log('dataArray', dataArray);
      instasearch.view(dataArray);
    }

    function fetchData(tag) {
      // create a url variable, and assign it to the result of instagramEndpoint()
      var url = instagramEndpoint();
      // add the AJAX get method here - $.get()
      $.get(url, function(json) {
        console.log('json', json);
          handleResults(json.data);
      }, "jsonp");

      // a function to get our API endpoint
      function instagramEndpoint() {
        var endpoint = "https://twitter-proxy-server.herokuapp.com/?searchTerm=";
        endpoint += tag;
        return endpoint;
      }
    }

    // add your test search here
    fetchData(tag);

  };
})();