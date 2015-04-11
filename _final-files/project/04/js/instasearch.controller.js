(function instaSearchController() {
  instasearch.controller = function() {
    // bind click event to #searchButton. 
    // Check if #searchField has a value
    // before initiating the search
    $("#searchForm").submit(function(e) {
      e.preventDefault();
      var searchTerm = $("#searchField").val();
      if(searchTerm.length) {
        instasearch.model(searchTerm);
      }
    });

  };

  // invoke the controller function once the document is ready
  $(document).ready(function() {
    instasearch.controller();
  });

})();