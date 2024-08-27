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


// bagikan
function shareBook(book) {
  const shareText = `${book.title} - ${book.pdf}`;
  
  // Buat link untuk WhatsApp
  const whatsappLink = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
  
  // Buat link untuk Facebook
  const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(book.pdf)}`;
  
  // Pilih platform yang diinginkan (contoh: buka WhatsApp)
  window.open(whatsappLink, '_blank');
}