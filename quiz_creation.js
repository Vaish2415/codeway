document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('quizForm').addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Fetch form data
      const formData = new FormData(event.target);
      const question = formData.get('question');
      const option1 = formData.get('option1');
      const option2 = formData.get('option2');
      const option3 = formData.get('option3');
      const option4 = formData.get('option4');
      const correctAnswer = formData.get('correctAnswer');
      
      // Do something with the form data, such as sending it to the server
      
      // For demonstration purposes, just log the form data
      console.log('Question:', question);
      console.log('Options:', option1, option2, option3, option4);
      console.log('Correct Answer:', correctAnswer);
    });
  });
  