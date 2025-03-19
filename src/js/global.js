  // Helper function to manage typing animation
  function setupTypingAnimation(words, elementId, typingDuration = 3000, pauseDuration = 1000) {
    const textElement = document.querySelector(elementId);
    if (!textElement) return;
    
    let wordIndex = 0;
    
    function animateNextWord() {
      textElement.style.animation = 'none';
      // Trigger reflow
      void textElement.offsetWidth;
      
      // Update text and restart animation
      textElement.textContent = words[wordIndex];
      textElement.style.animation = `typing ${typingDuration/1000}s steps(30, end) forwards, blink-caret 0.75s step-end infinite`;
      
      // Move to next word
      wordIndex = (wordIndex + 1) % words.length;
      
      // Schedule next animation
      setTimeout(animateNextWord, typingDuration + pauseDuration);
    }
    
    // Start the animation cycle
    animateNextWord();
  }

  // Initialize animations when DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Get words from the server-rendered config
    const words = ['visión digital', 'presencia online', 'idea en realidad'];
    
    // Setup typing animation
    setupTypingAnimation(words, '#typing-text', 3000, 1000);
    
    // Initialize particles.js if available
    if (typeof particlesJS !== 'undefined') {
      particlesJS('particles-js', {
        "particles": {
          "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
          "color": { "value": "#34d399" },
          "shape": {
            "type": "circle",
            "stroke": { "width": 0, "color": "#000000" },
            "polygon": { "nb_sides": 5 }
          },
          "opacity": {
            "value": 0.3,
            "random": false,
            "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#34d399",
            "opacity": 0.2,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": { "enable": true, "mode": "grab" },
            "onclick": { "enable": true, "mode": "push" },
            "resize": true
          },
          "modes": {
            "grab": { "distance": 140, "line_linked": { "opacity": 0.5 } },
            "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 },
            "repulse": { "distance": 200, "duration": 0.4 },
            "push": { "particles_nb": 4 },
            "remove": { "particles_nb": 2 }
          }
        },
        "retina_detect": true
      });
    }
  });
