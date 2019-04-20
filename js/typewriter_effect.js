// Initiate and assign variables
var i = 0; var j = 0;
var line1 = "Welcome to my creative diary..."

function typewriter_effect() {
  if (i < line1.length) {
    document.getElementById('welcome_screen').innerHTML += line1.charAt(i);
    i++;
    setTimeout(typewriter_effect, 70);
  }
}

// Run function once javascript code runs in html file
typewriter_effect();
