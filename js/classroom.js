// Function to show the selected classroom and highlight the active button
function showClassroom(number) {

  // Hide all classroom sections
  for (let i = 1; i <= 9; i++) {
    document.getElementById(`classroom-${i}`).classList.remove('active');
    document.getElementById(`button-${i}`).classList.remove('active-button');
  }

  // Show the selected classroom and highlight its button
  document.getElementById(`classroom-${number}`).classList.add('active');
  document.getElementById(`button-${number}`).classList.add('active-button');
}