const products = [
  {id: 1, title: 'Notebook', price: 1000},
  {id: 2, title: 'Mouse', price: 100},
  {id: 3, title: 'Keyboard', price: 250},
  {id: 4, title: 'Gamepad', price: 150},
];

const getProductHTMLString = (id, title, price) => {
  return `<div class="product-item" data-id="${id}">
              <h3>${title}</h3>
              <p>${price}</p>
              <p>ID продукта: ${id}</p>
              <button class="by-btn">Добавить</button>
            </div>`;
};

const renderProducts = productList => {
const list = productList.map( good => getProductHTMLString(good.id, good.title, good.price));
// Для то го что бы убрать запятые - я использую метод join c разделителем в виде пустой строки(данный метод объединяет элементы массива встроку)
document.querySelector('.products').innerHTML = list.join('');
  // console.log(list);
}
//pull requestsda

renderProducts(products);
