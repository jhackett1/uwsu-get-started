// Grab all the elements to make parallaxy
var elements = document.querySelectorAll('div.circle');
var arcs = document.querySelectorAll('div.bg');


// On scroll, request a new animation frame
window.addEventListener('scroll', function(){
  window.requestAnimationFrame(step);
})

// Calculate the position of each element
function step(){
  // First, calculate the current height of the viewport
  let viewportHeight = window.innerHeight;
  let midpoint = viewportHeight/2;
  // For every element with parallax scroll enabled
  for (var i = 0; i < elements.length; i++) {
    // Work our the height of the element
    let elementHeight = elements[i].offsetHeight;
    // Get the number of pixels between the of the element and the top of the page
    let distFromTop = elements[i].getBoundingClientRect().top;
    // Enact the animation
    elements[i].style.transform = 'translate3d(0px, ' + distFromTop/8 + 'px, 0px)'
  }

  // Now, for the opacity of the big one
  for (var i = 0; i < arcs.length; i++) {
    let arcHeight = arcs[i].getBoundingClientRect().top;
    if (arcHeight < viewportHeight) {
      // Enact the animation
      arcs[i].style.opacity = (1-(arcHeight/1000));
    }
  }
}



// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player('ytplayer', {
    height: '360',
    width: '640',
    videoId: '2DkVwY1Ttuc',
    playerVars: {
      autoplay: 1,
      controls: 0
    }
  });
}
