// Select the dark mode toggle element
const darkModeToggle = document.querySelector('.dark-mode');
const body = document.body;

// Add event listener to toggle dark mode on click
darkModeToggle.addEventListener('click', () => {
  // Toggle the dark mode class on the body
  body.classList.toggle('dark-mode-active');

  // Change the icon based on the dark mode status
  if (body.classList.contains('dark-mode-active')) {
    darkModeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>'; // Moon icon for dark mode
  } else {
    darkModeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>'; // Sun icon for light mode
  }
});
