
// Toggle mobile menu
document.getElementById("menu-button").addEventListener("click", function () {
  document.getElementById("mobile-menu").classList.remove("translate-x-full");
  document.getElementById("mobile-menu").classList.add("translate-x-0");
});

document.getElementById("close-menu").addEventListener("click", function () {
  document.getElementById("mobile-menu").classList.remove("translate-x-0");
  document.getElementById("mobile-menu").classList.add("translate-x-full");
});



// mobile search
const searchButton = document.querySelector("#search-button");
const search = document.querySelector("#mobile-search");


// Add hidden class on page load to ensure mobile search is hidden initially
window.onload = () => {
  search.classList.add("hidden");
  
};

// Toggle hidden class when search button is clicked
searchButton.onclick = (event) => {
  search.classList.toggle("hidden");
  event.stopPropagation(); // Prevent the click event from reaching the document listener
};

// Remove hidden class when clicking outside the search button or the search area
document.addEventListener("click", (event) => {
  const isClickInsideButton = searchButton.contains(event.target);
  const isClickInsideSearch = search.contains(event.target);

  if (!isClickInsideButton && !isClickInsideSearch) {
    search.classList.add("hidden");
  }
});


function downloadBook(pdfUrl) {
  Swal.fire({
    title: 'Downloading',
    text: 'Buku sedang diunduh, harap tunggu...',
    icon: 'info',
    showConfirmButton: false,
    timer: 2000
  }).then(() => {
    const a = document.createElement('a');
    a.href = pdfUrl;
    a.download = pdfUrl.split('/').pop(); // Menentukan nama file berdasarkan URL
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
}














