// AOS
AOS.init({duration:900,once:true});

// Particles - subtle accounting theme
particlesJS('particles-js',
  {
    "particles": {
      "number": {"value": 60},
      "color": {"value": ["#0fb3d1","#ffd166","#ffffff"]},
      "shape": {"type": "circle"},
      "opacity": {"value":0.5},
      "size": {"value":3},
      "line_linked":{"enable":true,"distance":120,"color":"#0fb3d1","opacity":0.08,"width":1},
      "move":{"speed":2}
    },
    "interactivity":{"events":{"onhover":{"enable":true,"mode":"repulse"}}}
  }
);

// VanillaTilt for cards (auto-applies to elements with data-tilt)
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
  max: 12, speed: 400, glare: true, "max-glare":0.15
});

// Hamburger toggle
document.addEventListener('DOMContentLoaded', function(){
  var btn = document.querySelector('.hamburger');
  var nav = document.querySelector('.main-nav');
  btn && btn.addEventListener('click', function(){ nav.classList.toggle('open'); nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex'; });
});

// Counters (for hero and counters page)
function animateCounters(){
  var nums = document.querySelectorAll('.num, .count');
  nums.forEach(function(el){
    if (el.dataset.animated) return;
    var target = +el.getAttribute('data-target') || 0;
    var count = 0;
    var step = Math.max(1, Math.floor(target / 150));
    var intv = setInterval(function(){
      count += step;
      if(count >= target){ el.textContent = target; el.dataset.animated = true; clearInterval(intv); } else { el.textContent = count; }
    }, 20);
  });
}
window.addEventListener('load', animateCounters);

// Simple SVG calculator "demo" animation: highlight buttons and show calculations on display
(function(){
  var display = document.getElementById('calc-display');
  var btns = Array.from(document.querySelectorAll('#calc-svg .btn-rect'));
  if(!display || btns.length===0) return;
  var seq = ['8','+','4','=','12','*','3','=','36','-','6','=','30'];
  var idx=0;
  function step(){
    // clear active
    btns.forEach(function(b){ b.classList.remove('active'); });
    // pick a button to highlight (cycle through btns)
    var b = btns[idx % btns.length];
    b.classList.add('active');
    // update display with part of sequence
    var v = seq[idx % seq.length];
    display.textContent = v;
    idx++;
    if(idx>seq.length*4) idx=0;
    setTimeout(step, 450);
  }
  // start after small delay if SVG present
  setTimeout(step, 800);
})();
