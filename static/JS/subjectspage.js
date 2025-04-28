document.addEventListener('DOMContentLoaded', () => {
    // Add particle background effect
    createParticles();
    
    // Handle card selection
    const cards = document.querySelectorAll('.subject-card');
    
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const subject = card.getAttribute('data-subject');
        
        // Add selection animation
        card.classList.add('selected');
        
        // Store selection
        localStorage.setItem('selectedSubject', subject);
        
        // Redirect after animation
        setTimeout(() => {
          window.location.href = "topics.html";
        }, 800);
      });
    });
    
    // Add some interactivity to the cards
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const angleX = (y - centerY) / 20;
        const angleY = (centerX - x) / 20;
        
        card.querySelector('.card-inner').style.transform = 
          `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
      });
      
      card.addEventListener('mouseleave', () => {
        card.querySelector('.card-inner').style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      });
    });
  });
  
  // Create floating particles in the background
  function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    particlesContainer.style.position = 'fixed';
    particlesContainer.style.top = '0';
    particlesContainer.style.left = '0';
    particlesContainer.style.width = '100%';
    particlesContainer.style.height = '100%';
    particlesContainer.style.overflow = 'hidden';
    particlesContainer.style.zIndex = '0';
    
    document.body.appendChild(particlesContainer);
    
    for (let i = 0; i < 20; i++) {
      createParticle(particlesContainer);
    }
  }
  
  function createParticle(container) {
    const particle = document.createElement('div');
    
    // Random size between 5-15px
    const size = Math.random() * 10 + 5;
    
    // Apply styles
    particle.style.position = 'absolute';
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.background = 'rgba(255, 255, 255, 0.1)';
    particle.style.borderRadius = '50%';
    particle.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.3)';
    
    // Random position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    
    // Add animation
    particle.style.animation = `float ${Math.random() * 10 + 20}s infinite linear`;
    
    // Add to container
    container.appendChild(particle);
    
    // Add the float animation to the stylesheet
    if (!document.querySelector('#particle-style')) {
      const style = document.createElement('style');
      style.id = 'particle-style';
      style.textContent = `
        @keyframes float {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translate(${Math.random() > 0.5 ? '+' : '-'}100px, ${Math.random() > 0.5 ? '+' : '-'}100px) rotate(360deg);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }
  