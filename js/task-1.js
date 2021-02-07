const categoriesEl = document.querySelector('#categories');
const categoriesAmount = categoriesEl.children.length;

console.log(`В списке ${categoriesAmount} категории.`);

const categoriesChildrenEl = categoriesEl.querySelectorAll('.item');
categoriesChildrenEl.forEach(x => console.log(`• Категория: ${x.querySelector('h2').textContent} \n• Количество элементов: ${x.querySelector('ul').children.length}`))