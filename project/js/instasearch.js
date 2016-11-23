var instasearch = {};

$(document).ready(function() {
  var hash = window.location.hash;
  hash = hash.replace('#access_token=','');
  if(hash.length) {
    $('#searchContainer').removeClass('hide');
    $('#loginContainer').addClass('hide');
    instasearch.access_token = hash;
  }
  console.log('hash', instasearch);
});