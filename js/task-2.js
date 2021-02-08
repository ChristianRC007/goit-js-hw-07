const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"];

const ingredientsListEl = document.querySelector("#ingredients");

ingredients.forEach(x => {
  const listItemEl = document.createElement("li");
  listItemEl.textContent = x;
  ingredientsListEl.appendChild(listItemEl);
});
