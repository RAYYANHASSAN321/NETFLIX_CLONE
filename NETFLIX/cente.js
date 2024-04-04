
  // Function to center the form
  function centerForm() {
    var formContainer = document.getElementById('formContainer');
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    var formHeight = formContainer.offsetHeight;
    var formWidth = formContainer.offsetWidth;

    // Calculate top and left position for centering the form
    var topPosition = (windowHeight - formHeight) / 2;
    var leftPosition = (windowWidth - formWidth) / 2;

    // Apply new top and left position to center the form
    formContainer.style.top = topPosition + 'px';
    formContainer.style.left = leftPosition + 'px';
  }

  // Call centerForm() when the window is resized or loaded
  window.addEventListener('resize', centerForm);
  window.addEventListener('load', centerForm);
