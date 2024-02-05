const books = require('./books.json');

const Books =[...books];
//console.log(books);

const filtredbooks = Books.filter(({price})=>price>=14);

console.log(filtredbooks);

const newBooks = Books.map(({id,title})=>`id : ${id} , Title : ${title}`)

console.log(newBooks);
try {
    const summarizePrice = (Books) => {
    
        const priceSum = Books.reduce((sum,book)=>{return sum + book.price},0);
    
        console.log(priceSum);
    }
    
    summarizePrice(Books);
} catch (error) {
    console.log(error);
}
