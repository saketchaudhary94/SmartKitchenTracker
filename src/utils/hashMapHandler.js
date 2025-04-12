const ingredientMap = {};

export function addIngredient(name, quantity, expiryDate) {
  ingredientMap[name] = { quantity, expiryDate };
}

export function deleteIngredient(name) {
  delete ingredientMap[name];
}

export function getAllIngredients() {
  return Object.entries(ingredientMap).map(([name, data]) => ({
    name,
    ...data
  }));
}
