/* Function for hamburger menu */
function hamburger_menu() {

  var x = document.getElementById("test_sidenav");
  if (x.className === "sidenav") {
    x.className += " opened";
  } else {
    x.className = "sidenav";
  }

  /*
   var page_links = document.getElementById('pages');

  /* When hamburger menu is pressed...
    If menu is displayed collapse, otherwise expand */
  /*if ( page_links.style.display == 'block' ) {
    /* Hides menu */
  /*  page_links.style.display = 'none';
  } else {
    /* Displays menu */
  /*  page_links.style.display = 'block';
  } */

}
