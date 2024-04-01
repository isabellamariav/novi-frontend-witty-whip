import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeDetails } from '../../services/api.js';
import './RecipeDetails.css';
import SideCard from '../../components/sideCard/SideCard.jsx';
import Loader from '../../components/loader/Loader.jsx';

const RecipeDetails = () => {
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecipeDetails = async () => {
            try {
                const data = await getRecipeDetails(recipeId);
                console.log('Recipe Details:', data);
                setRecipe(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching recipe details:', error);
            }
        };
        fetchRecipeDetails();
    }, [recipeId]);

    if (loading) {
        return <Loader />;
    }

    return (
        <main className="recipe-details">
            <SideCard>
                <section className="recipe-information">
                    <h2>{recipe.title}</h2>
                    <h3>Ready in</h3>
                    <p>{recipe.readyInMinutes} minutes</p>
                    <h3>Servings</h3>
                    <p>{recipe.servings}</p>
                    {recipe.dishTypes && recipe.dishTypes.length > 0 && (
                        <div>
                            <h3>Dish Types:</h3>
                            <ul>
                                {recipe.dishTypes.map((dishType, index) => (
                                    <li key={index}>{dishType}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {recipe.cuisines && recipe.cuisines.length > 0 && (
                        <div>
                            <h3>Cuisines:</h3>
                            <ul>
                                {recipe.cuisines.map((cuisine, index) => (
                                    <li key={index}>{cuisine}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {recipe.diets && recipe.diets.length > 0 && (
                        <div>
                            <h3>Diets:</h3>
                            <ul>
                                {recipe.diets.map((diet, index) => (
                                    <li key={index}>{diet}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </section>
            </SideCard>
            <article className="recipe-instructions">
                <img src={recipe.image} alt={recipe.title} />
                <h3>Ingredients:</h3>
                <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <h3>Instructions:</h3>
                <p>{recipe.instructions}</p>
            </article>
        </main>
    );
};

export default RecipeDetails;
