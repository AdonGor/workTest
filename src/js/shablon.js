import itemsTemplate from '../templates/gallery-items.hbs';
import products from '../arr.json';
import '../styles.css';
const markup = itemsTemplate(products);

console.log(markup);

// const markup = itemsTemplate({
//     items: ['THML', 'CSS', 'JS', 'React'],
// })
// console.log(markup);

// const tech = ['THML', 'CSS', 'JS', 'React'];

const galleryRef = document.querySelector('.js-gallery');

// const markup = tech.map(el => `<li><a href="">${el}</a></li>`).join('');

galleryRef.insertAdjacentHTML("afterend", markup);