console.log("************** DELIVERABLE 04 - READ BOOKS *********************");

interface IBook {
  title: string;
  isRead: boolean;
}

type isBookReadFunction = (books: Array<IBook>, titleToSearch: string) => boolean;

const isBookRead: isBookReadFunction = (books, titleToSearch) => {
  const book: IBook = books.find(({ title }: IBook) => title === titleToSearch);
  return book?.isRead || false;
}

const books: IBook[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

console.log("Devastación is read", isBookRead(books, "Devastación"));
console.log("Canción de hielo y fuego is read", isBookRead(books, "Canción de hielo y fuego"));
console.log("Los Pilares de la Tierra is read", isBookRead(books, "Los Pilares de la Tierra")); 
