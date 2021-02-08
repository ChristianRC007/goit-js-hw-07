const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"];

const ingredientsListEl = document.querySelector("#ingredients");

const ingredientstEl = ingredients.map(x => {
  const listItemEl = document.createElement("li");
  listItemEl.textContent = x;
  return listItemEl
})

ingredientsListEl.append(...ingredientstEl)
