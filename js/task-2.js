const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"];

const ingredientsListEl = document.querySelector("#ingredients");

const makeIngredientsList = items => {
  return items.map(item => {
    const listItemEl = document.createElement("li");
    listItemEl.textContent = item;
    return listItemEl
  });
};

const addItems = makeIngredientsList(ingredients);
ingredientsListEl.append(...addItems);
