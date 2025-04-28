// Topic data organized by programming language
const topicsData = {
  python: ["Variables & Data Types", "Loops", "Functions", "Object-Oriented Programming", "Modules"],
  javascript: ["Variables & Operators", "DOM Manipulation", "Events", "Promises & Async", "APIs"],
  htmlcss: ["HTML Basics", "CSS Styling", "Flexbox & Grid", "Responsive Design", "Forms"],
  java: ["Classes & Objects", "Inheritance", "Collections", "Exception Handling", "Multithreading"]
};

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get selected subject from localStorage (if exists)
  const selectedSubject = localStorage.getItem('selectedSubject');
  
  // If there's a selected subject, show only that section and update title
  if (selectedSubject) {
    document.getElementById('subjectTitle').innerText = Choose a Topic in ${capitalize(selectedSubject)};
    
    // Hide all sections first
    document.querySelectorAll('.topic-section').forEach(section => {
      section.style.display = 'none';
    });
    
    // Show only the selected section
    const sectionToShow = document.getElementById(${selectedSubject}Section);
    if (sectionToShow) {
      sectionToShow.style.display = 'block';
    }
  }
  
  // Add click event listeners to all topic boxes
  document.querySelectorAll('.topic-box').forEach(box => {
    box.addEventListener('click', function() {
      const subject = this.getAttribute('data-subject');
      const topic = this.getAttribute('data-topic');
      
      // Save selections to localStorage
      localStorage.setItem('selectedSubject', subject);
      localStorage.setItem('selectedTopic', topic);
      
      // Navigate to flashcards page
      window.location.href = "flashcards.html";
    });
  });
  
  // Back button functionality
  document.getElementById('backButton').addEventListener('click', function() {
    localStorage.removeItem('selectedSubject');
    window.location.href = "index.html";
  });
});

// Helper function to capitalize first letter of a string
function capitalize(word) {
  if (!word) return '';
  return word.charAt(0).toUpperCase() + word.slice(1);
}