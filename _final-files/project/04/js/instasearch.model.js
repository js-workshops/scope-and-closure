(function instaSearchModel() {
  instasearch.model = function(tag) {
    if (!tag) {
      tag = '';
    }
    function handleResults(dataArray) {
      // hook it up to our view function
      instasearch.view(dataArray);
    }

    function fetchData(tag) {
      // create a url variable, and assign it to the result of instagramEndpoint()
      var url = instagramEndpoint();
      // add the AJAX get method here - $.get()
      $.get(url, function(jsonData) {
        // do something with our
        // our jsonData here
        handleResults(jsonData.data);
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

  instasearch.model();
})();