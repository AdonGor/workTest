const book ={
name: 'hanting',
author: 'Sergio Pipiskin',
genre: 'detectiv',
pageCount: 724,
publisher: 'OOO Astrel',
};

console.log(typeof book);

const string = JSON.stringify(book);

console.log(typeof string);

const pars = JSON.parse(string);

