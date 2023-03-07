// Open the sidebar
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
}

// Close the sidebar
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}

// Toggle the sidebar open or closed when the open button is clicked
function toggleNav() {
  const sidebar = document.getElementById("mySidebar");
  if (sidebar.style.width === "250px") {
    closeNav();
  } else {
    openNav();
  }
}