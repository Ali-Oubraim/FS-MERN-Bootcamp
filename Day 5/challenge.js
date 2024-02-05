const books = require("./books.json");

function priceOfBook(bookName) {
  // write your code here
  for (let i = 0; i < books.length; i++) {
    if(books[i].title===bookName){
      return books[i].price;
    }else{
      return `The Book Not Exist !!`;
    }
    
  }
}

function affordableBooks(budget) {
  // write your code here
  let bookArr = [];
  let counter =0;
  for (let i = 0; i < books.length; i++) {
    if(budget<=books[i].price){
      bookArr[counter] = books[i];
      counter++;
    }
    
  }
}

function findBookByGenre(genre) {
  // write your code here
  let booksByGenres = [];
  let counter = 0;
  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < books[i].genres.length; j++) {
      if (genre===books[i].genres[j]) {
        booksByGenres[counter++] = books[i].title;
      }
    }
    
  }
  return booksByGenres;
}

function groupByGenre() {
  // write your code here
  const groupedBooks = {};

  for (let i = 0; i < books.length; i++) {
    const bookGenres = books[i].genres;

    for (let j = 0; j < bookGenres.length; j++) {
      const genre = bookGenres[j];

      if (!groupedBooks[genre]) {
        groupedBooks[genre] = [];
      }

      groupedBooks[genre][groupedBooks[genre].length] = {
        id: books[i].id,
        title: books[i].title,
        author: books[i].author,
        description: books[i].description,
        price: books[i].price,
      };
    }
    return groupedBooks;
}
}

function sortBooksByPrice() {
  // write your code here
  let sortedArr = books;
  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = 0; j < sortedArr.length; j++) {
      if (sortedArr[j].price > sortedArr[j+1].price) {
        let temp = sortedArr[j];
        sortedArr[j]=sortedArr[j+1];
        sortedArr[j+1]=temp;

      }      
    }    
  }
  return sortedArr;
}

(function main() {
  
  try {
    if (priceOfBook("The Alchemist") !== 9.49) {
      throw new Error("priceOfBook is not working properly.");
    }
    if (affordableBooks(10).length !== 6) {
      throw new Error("affordableBooks is not working properly.");
    }
    if (findBookByGenre("Fiction").length !== 7) {
      throw new Error("findBookByGenre is not working properly.");
    }
    if (Object.keys(groupByGenre()).length !== 30) {
      throw new Error("groupByGenre is not working properly.");
    }
    if (sortBooksByPrice()[0].price !== 5.99) {
      throw new Error("sortBooksByPrice is not working properly.");
    }
    
    console.log("All tests passed successfully.");
  } catch (error) {
    console.log(error);
  }

})();
