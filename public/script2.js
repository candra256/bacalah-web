// Script untuk handle drag & drop upload
const dropzone = document.getElementById("dropzone");
const fileInput = document.getElementById("fileInput");

dropzone.addEventListener("click", () => fileInput.click());

dropzone.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropzone.classList.add("bg-gray-100");
});

dropzone.addEventListener("dragleave", () => dropzone.classList.remove("bg-gray-100"));

dropzone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropzone.classList.remove("bg-gray-100");
  fileInput.files = e.dataTransfer.files;
});

// ...............................................................................

// Membuat elemen loading indicator dan success message
const loadingIndicator = document.getElementById("loadingIndicator");
const successMessage = document.getElementById("successMessage");

// Fungsi untuk menampilkan loading indicator success message
function showLoading() {
  loadingIndicator.classList.remove("hidden");
  successMessage.classList.add("hidden");
}

function hiddenLoading(){
    loadingIndicator.classList.add("hidden")
}

// Fungsi untuk menampilkan success message
function showSuccess() {
  loadingIndicator.classList.add("hidden");
  successMessage.classList.remove("hidden");
}

function alert() {
  Swal.fire({
    title: "Success!",
    text: "Your file has been uploaded successfully!",
    icon: "success",
    confirmButtonText: "OK",
  });
}

function alert2(){
    Swal.fire({

        text: "silahkan lengkapi data terlebih dahulu",
        confirmButtonText: 'OK'
    })
}

// fungsi mereset form
function resetForm() {
  // Reset input file
  fileInput.value = "";
  dropzoneText.textContent = "Klik atau drag & drop file di sini";

  // Reset input teks
  document.getElementById("nama").value = "";
  document.getElementById("email").value = "";
}

function hideSuccessMessage() {
  setTimeout(() => {
    successMessage.classList.add("hidden");
  }, 4000); // Sembunyikan setelah 3 detik (3000 ms)
}

// ................................................................................
// Event listener untuk update teks dropzone saat file diupload
const dropzoneText = dropzone.querySelector("p");
fileInput.addEventListener("change", () => {
  if (fileInput.files.length > 0) {
    dropzoneText.textContent = `File: ${fileInput.files[0].name}`;
  } else {
    dropzoneText.textContent = "Klik atau drag & drop file di sini";
  }
});

dropzone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropzone.classList.remove("bg-gray-100");
  fileInput.files = e.dataTransfer.files;

  if (fileInput.files.length > 0) {
    dropzoneText.textContent = `File: ${fileInput.files[0].name}`;
  }
});

// ......................................................................................
// Event listener untuk submit tombol
document.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault(); // Mencegah submit form default

  // Cek apakah ada file yang dipilih
  if (fileInput.files.length > 0) {
    showLoading(); // Tampilkan indikator loading

    // Simulasikan proses upload
    setTimeout(() => {
      alert(); // Tampilkan pesan sukses setelah upload selesai
      resetForm();
      hiddenLoading(); // Tampilkan indikator loading
      // Reset form setelah upload selesai
    }, 2000); // Simulasi delay 2 detik
  }
  else{
        alert2()
  }
});
