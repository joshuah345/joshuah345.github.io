const divAnimation = anime({
  targets: 'div',
  scale: 0,
  translateX: [0, 300, -600, 0],
  elasticity: 200,
  easing: 'easeInOutCubic',
  autoplay: false,
  opacity: 0.7
});

/**
 * Calculate the scroll percentage position
 */
const scrollPercent = () => {
  const bodyST = document.body.scrollTop;
  const docST = document.documentElement.scrollTop;
  const docSH = document.documentElement.scrollHeight;
  const docCH = document.documentElement.clientHeight;
  
  return (docST + bodyST) / (docSH - docCH) * 100
}

/**
 * Add a scroll listener on the window object to
 * control animations based on scroll percentage.
 */
window.onscroll = () => {
  divAnimation.seek((scrollPercent() / 100) * divAnimation.duration);
};

var num = 100;
function animateRipple() {
  
var $interval = setInterval(function() {
  var a = document.getElementById("shimmer-overlay");
  num = num - 10;
  if (num >= 0) {
    a.style.background = 'radial-gradient(#000 ' + num + '%,#1e69de 100%)';
  } else {
    clearInterval($interval);
  }
}, 40);
}