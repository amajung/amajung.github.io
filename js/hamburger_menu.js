/* Function for hamburger menu */
function hamburger_menu() {

  // Get sidenav element
  var x = document.getElementById("test_sidenav");

  // Add class opened to sidnav to open menu
  if (x.className == "sidenav") {
    x.className += " opened";
  // Otherwise revert back to close menu
  } else {
    x.className = "sidenav";
  }

}
