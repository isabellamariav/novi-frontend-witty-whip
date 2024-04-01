import { useState } from 'react';
import Input from '../../components/input/Input.jsx';
import CardButton from '../../components/cardButton/CardButton.jsx';
import RecipeCard from '../../components/recipeCard/RecipeCard.jsx';
import { searchRecipesByIngredients } from '../../services/api.js';
import SideCard from "../../components/sideCard/SideCard.jsx";
import Loader from '../../components/loader/Loader.jsx';
import './RecipeByIngredients.css';

const RecipeByIngredients = () => {
    const [recipes, setRecipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState('');
    const [numRecipesToShow, setNumRecipesToShow] = useState(12);
    const [searchedRecipesCount, setSearchedRecipesCount] = useState(0);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const data = await searchRecipesByIngredients(searchTerm, numRecipesToShow);
            setRecipes(data);
            setError('');
            setSearchedRecipesCount(numRecipesToShow);
        } catch (error) {
            setRecipes([]);
            setError('No recipes found. Please try a different search term.');
        }
        setLoading(false);
    };

    const fetchMoreRecipes = async () => {
        setLoading(true);
        try {
            const additionalRecipes = await searchRecipesByIngredients(searchTerm, 12);
            setRecipes(prevRecipes => [...prevRecipes, ...additionalRecipes]);
            setSearchedRecipesCount(prevCount => prevCount + 12);
        } catch (error) {
            setError('Error fetching more recipes.');
        }
        setLoading(false);
    };

    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if (searchTerm.trim() !== '') {
            setNumRecipesToShow(12);
            fetchData();
        }
    };

    const handleLoadMore = () => {
        if (searchedRecipesCount < 100) {
            fetchMoreRecipes();
        }
    };

    return (
        <main className="recipe-by-ingredients">
            <SideCard>
                <form className="search-bar" onSubmit={handleSearchSubmit}>
                    <h2>Search recipes by ingredients</h2>
                    <Input
                        label="Enter ingredients separated by commas"
                        type="text"
                        name="ingredients"
                        placeholder="Enter ingredients"
                        onChange={handleSearchInputChange}
                    />
                    <CardButton type="submit" isActive={true}>
                        Search
                    </CardButton>
                </form>
            </SideCard>
            <section className="recipe-list">
                {loading && <Loader />}
                {error && <p className="error-message">{error}</p>}
                {recipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
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

export default RecipeByIngredients;
