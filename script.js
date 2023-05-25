// Smooth scrolling for navigation bar items
document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('nav a');
  
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', smoothScroll);
    }
  
    function smoothScroll(event) {
      event.preventDefault();
      var targetId = this.getAttribute('href');
      var targetElement = document.querySelector(targetId);
      var startPosition = window.pageYOffset;
      var targetPosition = targetElement.offsetTop;
      var distance = targetPosition - startPosition;
      var duration = 300; 
      var startTime = null;
  
      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }
  
      function ease(t, b, c, d) {
        // Easing function (change as needed)
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }
  
      requestAnimationFrame(animation);
    }
  });

  // Animation for the welcome section
document.addEventListener('DOMContentLoaded', function() {
    var nameSection = document.querySelector('#welcome-section .name');
    var profileSection = document.querySelector('#welcome-section .profile');
  
    function animateSections() {
      nameSection.classList.add('show');
      profileSection.classList.add('show');
    }
  
    animateSections();
  });
  
  
 // Download resume functionality
document.addEventListener('DOMContentLoaded', function() {
    var downloadButton = document.getElementById('download-resume');
    
    downloadButton.addEventListener('click', function() {
      var resumeUrl = 'https://drive.google.com/file/d/16_var-JDMcrCQ-vVgSLWFnMoZPcq9AOf'; // Replace with the actual URL or path to your resume file
      
      var link = document.createElement('a');
      link.href = resumeUrl;
      link.target = '_blank'; // Open the resume in a new tab
      link.download = 'Rajib-dev-resume.pdf'; // Specify the filename for the downloaded file
      
      link.dispatchEvent(new MouseEvent('click'));
    });
  });
   