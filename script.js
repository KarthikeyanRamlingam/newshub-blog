document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle functionality could be added here
  
  // Newsletter form submission
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value.trim();
      
      if (email) {
        // In a real application, you would send this to your backend
        console.log('Newsletter subscription for:', email);
        alert('Thank you for subscribing to our newsletter!');
        emailInput.value = '';
      }
    });
  }
  
  // Search functionality
  const searchInputs = document.querySelectorAll('.search-input, .search-input-mobile');
  searchInputs.forEach(input => {
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        const searchTerm = this.value.trim();
        if (searchTerm) {
          // In a real application, you would redirect to search results
          console.log('Searching for:', searchTerm);
          alert(`Searching for: ${searchTerm}`);
        }
      }
    });
  });
  
  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Lazy load images (simplified version)
  // In a real application, you would use the Intersection Observer API
  function lazyLoadImages() {
    // This is a placeholder for actual image loading logic
    console.log('Images would be lazy loaded here');
  }
  
  // Call lazy load on page load
  lazyLoadImages();
  
  // Add active state to category pills
  const categoryPills = document.querySelectorAll('.category-pill');
  categoryPills.forEach(pill => {
    pill.addEventListener('click', function(e) {
      // Remove active class from all pills
      categoryPills.forEach(p => p.classList.remove('active'));
      // Add active class to clicked pill
      this.classList.add('active');
    });
  });
});