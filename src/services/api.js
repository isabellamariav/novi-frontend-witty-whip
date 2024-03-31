const API_KEY = '8d2756d179fa401db6cfa739094706f8';
const BASE_URL = 'https://api.spoonacular.com';

//For AllRecipesPage
export const searchRecipes = async (query, number) => {
    try {
        const response = await fetch(`${BASE_URL}/recipes/complexSearch?query=${query}&number=${number}&apiKey=${API_KEY}`);
        if (!response.ok) {
            throw new Error('Failed to fetch searched recipes');
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching searched recipes:', error);
        throw error;
    }
};

//For AllRecipesPage
export const getRandomRecipes = async (number) => {
    try {
        const response = await fetch(`${BASE_URL}/recipes/random?number=${number}&apiKey=${API_KEY}`);
        if (!response.ok) {
            throw new Error('Failed to fetch random recipes');
        }
        const data = await response.json();
        return data.recipes;
    } catch (error) {
        console.error('Error fetching random recipes:', error);
        return [];
    }
};

//For RecipeByIngredientsPage
export const searchRecipesByIngredients = async (ingredients, number) => {
    try {
        const response = await fetch(`${BASE_URL}/recipes/findByIngredients?ingredients=${ingredients}&number=${number}&apiKey=${API_KEY}`);
        if (!response.ok) {
            throw new Error('Failed to fetch recipes by ingredients');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching recipes by ingredients:', error);
        throw error;
    }
};

//For RecipeDetailsPage
export const getRecipeDetails = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/recipes/${id}/information?apiKey=${API_KEY}`);
        if (!response.ok) {
            throw new Error('Failed to fetch recipe details');
        }
        const data = await response.json();
        return {
            id: data.id,
            title: data.title,
            image: data.image,
            readyInMinutes: data.readyInMinutes,
            servings: data.servings,
            ingredients: data.extendedIngredients.map(ingredient => ingredient.original),
            instructions: data.instructions,
            dishTypes: data.dishTypes,
            cuisines: data.cuisines,
            diets: data.diets,
        };
    } catch (error) {
        console.error('Error fetching recipe details:', error);
        return null;
    }
};
