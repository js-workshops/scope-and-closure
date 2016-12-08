(function instaSearchModel() {
  instasearch.model = function(tag) {
    if (!tag) {
      tag = '';
    }
    function handleResults(dataArray) {
      // hook it up to our view function

    }

    function fetchData(tag) {
      // create a url variable, and assign it to the result of instagramEndpoint()

      // add the AJAX get method here - $.get()

      // a function to get our API endpoint
      function instagramEndpoint() {
        var endpoint = "https://twitter-proxy-server.herokuapp.com/?searchTerm=";
        endpoint += tag;
        return endpoint;
      }
    }

    // add your test search here

  };

  instasearch.model();
})();