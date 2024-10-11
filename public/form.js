
// form input
const dropzone = document.getElementById("dropzone");
const fileInput = document.getElementById("fileInput");
const nama = document.getElementById("nama");
const email = document.getElementById("email")

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", (e) => {
  e.preventDefault(); // Mencegah submit form default

  // Cek apakah semua input telah terisi
  if (nama.value === "" || email.value === "" || fileInput.files.length === 0) {
    incompleteData(); // Tampilkan pesan peringatan
    return;
  }

  // Jika semua input telah terisi
  showLoading(); // Tampilkan indikator loading
  resetForm(); // Reset form
});


// Script untuk handle drag & drop upload
dropzone.addEventListener("click", () => fileInput.click());

dropzone.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropzone.classList.add("bg-gray-100");
});

dropzone.addEventListener("dragleave", () => dropzone.classList.remove("bg-gray-100"));

dropzone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropzone.classList.remove("bg-gray-100");

  // Mengelola file yang dijatuhkan
  const files = e.dataTransfer.files;

  // Jika ingin langsung menambahkan file ke input
  fileInput.files = files;

  // Atau, jika Anda ingin menggabungkan file yang dipilih secara manual dan yang dijatuhkan:
  const fileArray = Array.from(fileInput.files);
  for (let i = 0; i < files.length; i++) {
    fileArray.push(files[i]);
  }

  // Mengonversi kembali ke FileList
  const dataTransfer = new DataTransfer();
  fileArray.forEach((file) => dataTransfer.items.add(file));
  fileInput.files = dataTransfer.files;

  // Misalnya, Anda ingin menampilkan nama file yang diunggah
  console.log(
    "Files uploaded:",
    fileArray.map((file) => file.name)
  );
});

// drag and drop file
dropzone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropzone.classList.remove("bg-gray-100");
  fileInput.files = e.dataTransfer.files;

  if (fileInput.files.length > 0) {
    const fileNames = Array.from(fileInput.files)
      .map((file) => file.name)
      .join(", ");
    dropzoneText.textContent = `Files: ${fileNames}`;
  }
});

// validasi agar hanya file pdf saja , mengupdate dropzone
const dropzoneText = dropzone.querySelector("p");
fileInput.addEventListener("change", () => {
  const validExtensions = ["pdf"];
  const files = Array.from(fileInput.files);
  const invalidFiles = files.filter(
    (file) => !validExtensions.includes(file.name.split(".").pop().toLowerCase())
  );

  if (invalidFiles.length > 0) {
    Swal.fire({
      icon: "error",
      title: "File tidak valid",
      text: `File tidak valid: ${invalidFiles
        .map((file) => file.name)
        .join(", ")}. Hanya file PDF yang diperbolehkan.`,
      confirmButtonText: "OK",
    });

    // Menghapus file yang tidak valid dari input
    const validFiles = files.filter((file) =>
      validExtensions.includes(file.name.split(".").pop().toLowerCase())
    );
    const dataTransfer = new DataTransfer();
    validFiles.forEach((file) => dataTransfer.items.add(file));
    fileInput.files = dataTransfer.files;

    // Jika tidak ada file yang valid, reset tampilan dropzone
    if (fileInput.files.length === 0) {
      dropzoneText.textContent = "Klik atau drag & drop file di sini";
    }
  } else {
    const fileNames = files.map((file) => file.name).join(", ");
    dropzoneText.textContent = `Files: ${fileNames}`;
  }
});


// alerts functions
function showLoading() {
  Swal.fire({
    title: "Tunggu sebentar...",
    text: "Proses sedang berlangsung",
    icon: "info",
    allowOutsideClick: false, // Mencegah pengguna menutup alert dengan klik di luar
    didOpen: () => {
      Swal.showLoading(); // Menampilkan loading spinner
    },
  });

  // Simulasi proses asinkron yang berlangsung selama 3 detik
  setTimeout(() => {
    Swal.fire({
      title: "Success!",
      text: "File Anda telah berhasil diunggah!",
      icon: "success",
      allowOutsideClick:false,
      confirmButtonText: "OK",
    });
  }, 2000);
}

function incompleteData() {
  Swal.fire({
    title: "Data Tidak Lengkap!",
    text: "Silakan lengkapi data terlebih dahulu.",
    allowOutsideClick: false,
    icon: "warning", // Menambahkan ikon peringatan
    confirmButtonText: "OK",
    confirmButtonColor: "#3085d6", // Warna tombol
    backdrop: true, // Menambahkan efek backdrop untuk fokus pada alert
  });
}

function resetForm() {
  // Reset input file
  fileInput.value = "";
  dropzoneText.textContent = "Klik atau drag & drop file di sini";

  // Reset input teks
  document.getElementById("nama").value = "";
  document.getElementById("email").value = "";
}
