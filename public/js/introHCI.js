'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
  $(".likeBtn").click(likeBtnClicked);
  $(".btn btn-default likeBtn").click(likeBtnClicked);
  // your code here
}

function likeBtnClicked() {
  console.log("Clicked");
  ga("send", "event", "like", "click");
}