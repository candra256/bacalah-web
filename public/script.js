
// Toggle mobile menu
document.getElementById("menu-button").addEventListener("click", function () {
  document.getElementById("mobile-menu").classList.remove("translate-x-full");
  document.getElementById("mobile-menu").classList.add("translate-x-0");
});

document.getElementById("close-menu").addEventListener("click", function () {
  document.getElementById("mobile-menu").classList.remove("translate-x-0");
  document.getElementById("mobile-menu").classList.add("translate-x-full");
});



// functuon alert when downloadbook
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


// loading screen
window.onload = function() {
  if (localStorage.getItem('page_loaded')) {
      document.getElementById('loading-screen').style.display = 'none';
  } else {
      // Set item di localStorage agar tidak muncul saat di-refresh
      localStorage.setItem('page_loaded', 'true');
      setTimeout(function() {
          document.getElementById('loading-screen').style.display = 'none';
      }, 100); // Ubah durasi sesuai kebutuhan
  }
};



// // back to top
// document.addEventListener('DOMContentLoaded', () => {
//   const backToTopButton = document.getElementById('back-to-top');

//   // Tampilkan tombol saat menggulir ke bawah
//   window.addEventListener('scroll', () => {
//       if (window.scrollY > 300) { // Ubah nilai ini sesuai dengan kebutuhan
//           backToTopButton.classList.add('show');
//       } else {
//           backToTopButton.classList.remove('show');
//       }
//   });

//   // Scroll ke atas saat tombol diklik
//   backToTopButton.addEventListener('click', (e) => {
//       e.preventDefault();
//       window.scrollTo({
//           top: 0,
//           behavior: 'smooth'
//       });
//   });
// });













