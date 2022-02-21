/**
 * Open dropdown on click event
 * funtion toggles the dropdown display to hide and show the dropdown
 */

const dropdownOpener = document.querySelector(".nav-dropdown-link");

const toggleDropdown = () => {
const dropdown = document.querySelector(".nav-dropdown");
  if(dropdown.style.display === "" || dropdown.style.display === "none")
    dropdown.style.display = "block";
  else
    dropdown.style.display = "none";
}

dropdownOpener.addEventListener("click", toggleDropdown);