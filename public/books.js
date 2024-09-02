// books.js
window.booksData = [
  {
    title: "Peter Norton, Alex Samuel ...",
    cover: "img/cover (1).png",
    pdf: "pdf/begining_python.pdf",
  },

  { title: "Will McGugan", cover: "img/cover (2).png", pdf: "pdf/game_dev_python.pdf" },

  { title: "Kevin Warwick", cover: "img/cover (3).png", pdf: "pdf/artificial_intelegence.pdf" },

  {
    title: "Dr. Joseph Teguh santoso, S.kom , M.kom",
    cover: "img/cover (4).png",
    pdf: "pdf/analis_big_data.pdf",
  },

  { title: "Edy Budiman", cover: "img/cover (5).png", pdf: "pdf/algoritma_pemograman.pdf" },

  {
    title: "Jorot Dian Susatyono , M.kom",
    cover: "img/cover (6).png",
    pdf: "pdf/kecerdasan_buatan.pdf",
  },

  { title: "Hendri", cover: "img/cover (7).png", pdf: "pdf/cepatmahirpython.pdf" },

  {
    title: "Dr. Joseph Teguh santoso, S.ko , M.kom",
    cover: "img/cover (8).png",
    pdf: "pdf/projekcodingdenganpython.pdf",
  },

  { title: "Wes McKinney", cover: "img/cover (9).png", pdf: "pdf/python_for_data.pdf" },

  {
    title: "Berd Klein",
    cover: "img/cover (10).png",
    pdf: "pdf/bernd_klein_python_data_analysis_a4.pdf",
  },

  { title: "bicara itu ada seninya", author:"oh su hyang", cover: "img/coverS (1).png", pdf: "pdf/bicara_itu_ada_seninya.pdf" },

  {
    title: "Dr. Agus Wibowo , M.kom , M.Si , MM",
    cover: "img/coverS (2).png",
    pdf: "pdf/teori_kewirausahawan.pdf",
  },

  {
    title: "Dr.Ir. Agus Wibowo , M.kom , M.Si , MM",
    cover: "img/coverS (3).png",
    pdf: "pdf/pengaturan_uang.pdf",
  },

  { title: "filoso fiteras", cover: "img/coverS (4).png", pdf: "pdf/filosofiteras.pdf" },
];

function bookList() {
   return {
       searchQuery: '',
       books: window.booksData,
       selectedBook: null,
       get filteredBooks() {
           if (!this.searchQuery) {
               return this.books; // Jika query kosong, kembalikan semua buku
           }
           
           const query = this.searchQuery.toLowerCase();
           const results = this.books
               .map(book => ({
                   book,
                   score: this.calculateMatchScore(book.title.toLowerCase(), query)
               }))
               .filter(result => result.score > 0) // Filter buku yang tidak cocok
               .sort((a, b) => b.score - a.score); // Urutkan berdasarkan skor
           
           return results.map(result => result.book);
       },
       get noBooksFound() {
           return this.searchQuery && this.filteredBooks.length === 0;
       },
       calculateMatchScore(title, query) {
           if (!query) return 0;
           
           const queryLength = query.length;
           const titleLower = title.toLowerCase();
           const queryLower = query.toLowerCase();
           
           if (titleLower.includes(queryLower)) {
               // Hitung skor kecocokan berdasarkan panjang substring yang cocok
               const matchIndex = titleLower.indexOf(queryLower);
               const matchLength = queryLength;
               
               // Skor adalah proporsi dari panjang query yang cocok di dalam judul
               return Math.min(matchLength / titleLower.length, 1);
           }
           
           return 0;
       },
       searchBooks() {
           // Update filteredBooks jika pencarian dilakukan
           // Alpine.js akan menangani re-render otomatis berdasarkan perubahan searchQuery
       },
     
   };
}
