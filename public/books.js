// books.js
window.booksData = [
  {
    title: "begining python",
    cover: "img/cover (1).png",
    pdf: "pdf/begining_python.pdf",
    author:"Peter Norton, Alex Samuel ..."
  },

  { title: "beginning game development with python and pygame",
     cover: "img/cover (2).png",
      pdf: "pdf/game_dev_python.pdf",
    author:"Will McGugan" },

  { title: "artificial intelegence",
     cover: "img/cover (3).png", 
     pdf: "pdf/artificial_intelegence.pdf",
    author:"Kevin Warwick" },

  {
    title: "analisis big data",
    cover: "img/cover (4).png",
    pdf: "pdf/analis_big_data.pdf",
    author:"Dr. Joseph Teguh santoso, S.kom , M.kom"
  },

  { title: "belajar dasar algoritma dan pemograman",
     cover: "img/cover (5).png",
      pdf: "pdf/algoritma_pemograman.pdf",
    author:"edy budiman" },

  {
    title: "kecerdasan buatan kajian konsep dan penerapan",
    cover: "img/cover (6).png",
    pdf: "pdf/kecerdasan_buatan.pdf",
    author:"Jorot Dian Susatyono , M.kom"
  },

  { title: "cepat mahir python", 
    cover: "img/cover (7).png", 
    pdf: "pdf/cepatmahirpython.pdf",
  author:"hendri",
 },

  {
    title: "projek codingan dengan python",
    cover: "img/cover (8).png",
    pdf: "pdf/projekcodingdenganpython.pdf",
    author:"Dr. Joseph Teguh santoso, S.ko , M.kom"
  },

  { title: "python for data analysis", 
    cover: "img/cover (9).png", 
    pdf: "pdf/python_for_data.pdf",
  author:"Wes McKinney" },

  {
    title: "data analysis numpy , mathplotlib , pandas",
    cover: "img/cover (10).png",
    pdf: "pdf/bernd_klein_python_data_analysis_a4.pdf",
    author:"Berd Klein"
  },

  {
    title: "bicara itu ada seninya",
    author: "oh su hyang",
    cover: "img/coverS (1).png",
    pdf: "pdf/bicara_itu_ada_seninya.pdf",
  },

  {
    title: "teori kewirausahaan dan bisnis",
    cover: "img/coverS (2).png",
    pdf: "pdf/teori_kewirausahawan.pdf",
    author:"Dr. Agus Wibowo , M.kom , M.Si , MM",
  },

  {
    title: "pengendalian keuangan",
    cover: "img/coverS (3).png",
    pdf: "pdf/pengaturan_uang.pdf",
    author: "Dr.Ir. Agus Wibowo , M.kom , M.Si , MM",
  },

  { title: "filosofiteras",
     cover: "img/coverS (4).png", 
     pdf: "pdf/filosofiteras.pdf",
     author: "henry manampiring" },
   
];

function bookList() {
  return {
    searchQuery: "",
    books: window.booksData,
    selectedBook: null,
    get filteredBooks() {
      if (!this.searchQuery) {
        return this.books; // Jika query kosong, kembalikan semua buku
      }

      const query = this.searchQuery.toLowerCase();
      const results = this.books
        .map((book) => ({
          book,
          score: this.calculateMatchScore(book.title.toLowerCase(), query),
        }))
        .filter((result) => result.score > 0) // Filter buku yang tidak cocok
        .sort((a, b) => b.score - a.score); // Urutkan berdasarkan skor

      return results.map((result) => result.book);
    },
    get noBooksFound() {
      return this.searchQuery && this.filteredBooks.length === 0;
    },
    calculateMatchScore(title, query) {
      if (!query) return 0;

      const titleWords = title.split(" ");
      const queryWords = query.split(" ");
      let score = 0;

      // Hitung skor berdasarkan kata yang cocok
      queryWords.forEach((queryWord) => {
        titleWords.forEach((titleWord) => {
          if (titleWord.startsWith(queryWord)) {
            score += queryWord.length / titleWord.length;
          }
        });
      });

      return score / queryWords.length;
    },

    searchBooks() {
      // Update filteredBooks jika pencarian dilakukan
      // Alpine.js akan menangani re-render otomatis berdasarkan perubahan searchQuery
    },
  };
}
