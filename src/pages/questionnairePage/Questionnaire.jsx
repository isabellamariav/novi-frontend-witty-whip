import { useState } from 'react';
import CardButton from '../../components/cardButton/CardButton.jsx';
import { searchRecipes } from '../../services/api.js';
import RecipeCard from '../../components/recipeCard/RecipeCard.jsx';
import SideCard from "../../components/sideCard/SideCard.jsx";
import Loader from '../../components/loader/Loader.jsx';
import './Questionnaire.css';

const Questionnaire = () => {
    const [mealType, setMealType] = useState('');
    const [dietaryRestrictions, setDietaryRestrictions] = useState([]);
    const [intolerances, setIntolerances] = useState([]);
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState('');
    const [numRecipesToShow, setNumRecipesToShow] = useState(12);
    const [searchedRecipesCount, setSearchedRecipesCount] = useState(0);
    const [loading, setLoading] = useState(false); // State to track loading status

    const handleMealTypeChange = (event) => {
        setMealType(event.target.value);
    };

    const handleDietaryRestrictionsChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setDietaryRestrictions(prev => [...prev, value]);
        } else {
            setDietaryRestrictions(prev => prev.filter(item => item !== value));
        }
    };

    const handleIntolerancesChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setIntolerances(prev => [...prev, value]);
        } else {
            setIntolerances(prev => prev.filter(item => item !== value));
        }
    };

    const getRecipes = async () => {
        setLoading(true);
        try {
            const query = `${mealType}&diet=${dietaryRestrictions.join(',')}&intolerances=${intolerances.join(',')}`;
            const data = await searchRecipes(query, 12);
            setRecipes(data);
            setError('');
            setSearchedRecipesCount(12);
            setNumRecipesToShow(12);
        } catch (error) {
            setRecipes([]);
            setError('No recipes found. Please try a different combination.');
        }
        setLoading(false);
    };


    const handleLoadMore = async () => {
        const newNumRecipesToShow = numRecipesToShow + 12;
        setLoading(true);
        try {
            const query = `${mealType}&diet=${dietaryRestrictions.join(',')}&intolerances=${intolerances.join(',')}`;
            const additionalRecipes = await searchRecipes(query, 12);
            setRecipes(prevRecipes => [...prevRecipes, ...additionalRecipes]);
            setNumRecipesToShow(newNumRecipesToShow);
            setError('');
            setSearchedRecipesCount(newNumRecipesToShow);
        } catch (error) {
            setError('Error fetching additional recipes. Please try again.');
        }
        setLoading(false);
    };

    return (
        <main className="questionnaire">
            <SideCard>
                <section className="questions">
                    <div className="question">
                        <h2>Questionnaire</h2>
                        <h3>What meal type are you looking for?</h3>
                        <div className="radio-options">
                            <label>
                                <input type="radio" name="mealType" value="appetizer" checked={mealType === "appetizer"}
                                       onChange={handleMealTypeChange}/>
                                Appetizer
                            </label>
                            <label>
                                <input type="radio" name="mealType" value="main course"
                                       checked={mealType === "main course"}
                                       onChange={handleMealTypeChange}/>
                                Main Course
                            </label>
                            <label>
                                <input type="radio" name="mealType" value="dessert" checked={mealType === "dessert"}
                                       onChange={handleMealTypeChange}/>
                                Dessert
                            </label>
                            <label>
                                <input type="radio" name="mealType" value="breakfast" checked={mealType === "breakfast"}
                                       onChange={handleMealTypeChange}/>
                                Breakfast
                            </label>
                            <label>
                                <input type="radio" name="mealType" value="snack" checked={mealType === "snack"}
                                       onChange={handleMealTypeChange}/>
                                Snack
                            </label>
                            <label>
                                <input type="radio" name="mealType" value="drinks" checked={mealType === "drinks"}
                                       onChange={handleMealTypeChange}/>
                                Drinks
                            </label>
                        </div>
                    </div>
                    <div className="question">
                        <h3>Do you have any dietary restrictions?</h3>
                        <div className="checkbox-options">
                            <label>
                                <input type="checkbox" value="Gluten Free" onChange={handleDietaryRestrictionsChange}/>
                                Gluten Free
                            </label>
                            <label>
                                <input type="checkbox" value="Ketogenic" onChange={handleDietaryRestrictionsChange}/>
                                Ketogenic
                            </label>
                            <label>
                                <input type="checkbox" value="Vegetarian" onChange={handleDietaryRestrictionsChange}/>
                                Vegetarian
                            </label>
                            <label>
                                <input type="checkbox" value="Vegan" onChange={handleDietaryRestrictionsChange}/>
                                Vegan
                            </label>
                            <label>
                                <input type="checkbox" value="Pescetarian" onChange={handleDietaryRestrictionsChange}/>
                                Pescetarian
                            </label>
                            <label>
                                <input type="checkbox" value="Paleo" onChange={handleDietaryRestrictionsChange}/>
                                Paleo
                            </label>
                        </div>
                    </div>
                    <div className="question">
                        <h3>Do you have any intolerances?</h3>
                        <div className="checkbox-options">
                            <label>
                                <input type="checkbox" value="Dairy" onChange={handleIntolerancesChange}/>
                                Dairy
                            </label>
                            <label>
                                <input type="checkbox" value="Egg" onChange={handleIntolerancesChange}/>
                                Egg
                            </label>
                            <label>
                                <input type="checkbox" value="Gluten" onChange={handleIntolerancesChange}/>
                                Gluten
                            </label>
                            <label>
                                <input type="checkbox" value="Peanut" onChange={handleIntolerancesChange}/>
                                Peanut
                            </label>
                            <label>
                                <input type="checkbox" value="Shellfish" onChange={handleIntolerancesChange}/>
                                Shellfish
                            </label>
                            <label>
                                <input type="checkbox" value="Tree Nut" onChange={handleIntolerancesChange}/>
                                Tree Nut
                            </label>
                        </div>
                    </div>
                    <CardButton onClick={getRecipes} isActive={true}>
                        Get Recipes
                    </CardButton>
                    {loading && <Loader />}
                    <p></p>
                </section>
            </SideCard>
            <section className="recipe-list">
                {error && <p className="error-message">{error}</p>}
                {recipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe}/>
                ))}
                {recipes.length > 0 && searchedRecipesCount < 100 && (
                    <CardButton onClick={handleLoadMore} isActive={true}>
                        Load More
                    </CardButton>
                )}
            </section>
        </main>
    );
};

export default Questionnaire;
