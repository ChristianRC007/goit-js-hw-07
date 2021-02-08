const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"];

const ingredientsListEl = document.querySelector("#ingredients");

// const ingredientstEl = ingredients.map(x => {
//   const listItemEl = document.createElement("li");
//   listItemEl.textContent = x;
//   return listItemEl
// })
const makeIngredientsList = items => {
  return items.map(item => {
    const listItemEl = document.createElement("li");
    listItemEl.textContent = item;
    return listItemEl
  });
};

const addItems = makeIngredientsList(ingredients);
ingredientsListEl.append(...addItems);
