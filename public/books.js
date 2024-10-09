// books.js
window.booksData = [
  {
    title: "pengendalian keuangan",
    cover: "img/coverS (3).webp",
    pdf: "pdf/pengaturan_uang.pdf",
    author: "Dr.Ir. Agus Wibowo , M.kom , M.Si , MM",
    penerbit:"yayasan primaagus teknik",
    tahunTerbit: "2023"
  },

  {
    title: "filosofiteras",
    cover: "img/coverS (4).webp",
    pdf: "pdf/filosofiteras.pdf",
    author: "henry manampiring",
    penerbit: "Penerbit Kompas",
    tahunTerbit:"2018"
  },


  {
    title: "begining python",
    cover: "img/cover (1).webp",
    pdf: "pdf/begining_python.pdf",
    author: "Peter Norton, Alex Samuel ...",
    penerbit: "Wiley Publishing, Inc.",
    tahunTerbit: "2005"
  },

  {
    title: "bicara itu ada seninya",
    author: "oh su hyang",
    cover: "img/coverS (1).webp",
    pdf: "pdf/bicara_itu_ada_seninya.pdf",
    penerbit:"Bhuana Ilmu Populer (BIP)",
    tahunTerbit:"2019"
  },

  {
    title: "teori kewirausahaan dan bisnis",
    cover: "img/coverS (2).webp",
    pdf: "pdf/teori_kewirausahawan.pdf",
    author: "Dr. Agus Wibowo , M.kom , M.Si , MM",
    penerbit:"yayasan primaagus teknik",
    tahunTerbit:"2023"
  },

  {
    title: "beginning game development with python and pygame",
    cover: "img/cover (2).webp",
    pdf: "pdf/game_dev_python.pdf",
    author: "Will McGugan",
    penerbit:"Apress",
    tahunTerbit:"2007"
  },

  {
    title: "artificial intelegence",
    cover: "img/cover (3).webp",
    pdf: "pdf/artificial_intelegence.pdf",
    author: "Kevin Warwick",
    penerbit:"Routledge",
    tahunTerbit:"2012"
  },

  {
    title: "analisis big data",
    cover: "img/cover (4).webp",
    pdf: "pdf/analis_big_data.pdf",
    author: "Dr. Joseph Teguh santoso, S.kom , M.kom",
    penerbit:"yayasan primaagus teknik",
    tahunTerbit:"2020"
  },

  {
    title: "belajar dasar algoritma dan pemograman",
    cover: "img/cover (5).webp",
    pdf: "pdf/algoritma_pemograman.pdf",
    author: "edy budiman",
    penerbit:"data tidak ditemukan",
    tahunTerbit:"data tidak ditemukan"
  },

  {
    title: "kecerdasan buatan kajian konsep dan penerapan",
    cover: "img/cover (6).webp",
    pdf: "pdf/kecerdasan_buatan.pdf",
    author: "Jorot Dian Susatyono , M.kom",
    penerbit:"yayasan primaagus teknik",
    tahunTerbit:"2021"
  },

  {
    title: "cepat mahir python",
    cover: "img/cover (7).webp",
    pdf: "pdf/cepatmahirpython.pdf",
    author: "hendri",
    penerbit:"data tidak ditemukan",
    tahunTerbit:"data tidak ditemukan"
  },


  {
    title: "projek codingan dengan python",
    cover: "img/cover (8).webp",
    pdf: "pdf/projekcodingdenganpython.pdf",
    author: "Dr. Joseph Teguh santoso, S.ko , M.kom",
    penerbit:"yayasan primaagus teknik",
    tahunTerbit:"2022"
  },

  
  {
    title: "data analysis numpy , mathplotlib , pandas",
    cover: "img/cover (10).webp",
    pdf: "pdf/bernd_klein_python_data_analysis_a4.pdf",
    author: "Berd Klein",
    penerbit:"data tidak ditemukan",
    tahunTerbit:"data tidak ditemukan"
  },


];

function bookList() {
  return {
    searchQuery: "",
    books: window.booksData,
    selectedBook: null,

    get filteredBooks() {
      if (!this.searchQuery) {
        return this.books;
      }

      const query = this.searchQuery.toLowerCase();
      const results = this.books
        .map((book) => ({
          book,
          score: this.calculateMatchScore(book.title.toLowerCase(), query),
        }))
        .filter((result) => result.score > 0)
        .sort((a, b) => b.score - a.score);

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

    },
  };
}
