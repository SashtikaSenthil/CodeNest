document.addEventListener('DOMContentLoaded', function() {
    // Particles animation
    const particlesContainer = document.getElementById('particles');
    
    function createParticle() {
      const particle = document.createElement('div');
      particle.style.position = 'absolute';
      particle.style.width = Math.random() * 5 + 1 + 'px';
      particle.style.height = particle.style.width;
      particle.style.backgroundColor = 'rgba(255, 255, 255, ' + (Math.random() * 0.5 + 0.1) + ')';
      particle.style.borderRadius = '50%';
      particle.style.top = Math.random() * 100 + 'vh';
      particle.style.left = Math.random() * 100 + 'vw';
      particle.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.8)';
      
      const duration = Math.random() * 20 + 10;
      particle.style.animation = `float ${duration}s linear infinite`;
      
      const keyframes = `
        @keyframes float {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(180deg);
          }
          100% {
            transform: translate(0, 0) rotate(360deg);
          }
        }
      `;
      
      const style = document.createElement('style');
      style.appendChild(document.createTextNode(keyframes));
      document.head.appendChild(style);
      
      particlesContainer.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
        style.remove();
      }, duration * 1000);
    }
    
    // Create initial particles
    for (let i = 0; i < 30; i++) {
      createParticle();
    }
    
    // Create new particles periodically
    setInterval(createParticle, 1000);
    
    // Button animation and functionality
    const startButton = document.getElementById('start-button');
    
    startButton.addEventListener('click', function() {
      // Button click animation
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = '';
      }, 100);
      
      // Add loading animation to button
      this.innerHTML = '<span class="spinner"></span> Loading...';
      this.disabled = true;
      
      // Simulate loading then redirect
      setTimeout(() => {
        window.location.href = "subjects.html";
      }, 1500);
    });
    
    // Animate features on hover
    const features = document.querySelectorAll('.feature');
    
    features.forEach(feature => {
      feature.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.icon');
        icon.style.transform = 'scale(1.2) rotate(5deg)';
        setTimeout(() => {
          icon.style.transform = '';
        }, 300);
      });
    });
  });