import { useState } from 'react'; // Remove useEffect import
import Input from '../../components/input/Input.jsx';
import CardButton from '../../components/cardButton/CardButton.jsx';
import RecipeCard from '../../components/recipeCard/RecipeCard.jsx';
import { searchRecipes } from '../../services/api.js';
import SideCard from "../../components/sideCard/SideCard.jsx";
import Loader from '../../components/loader/Loader.jsx'; // Import the Loader component
import './RecipeByIngredients.css';

const RecipeByIngredients = () => {
    const [recipes, setRecipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState('');
    const [numRecipesToShow, setNumRecipesToShow] = useState(12);
    const [searchedRecipesCount, setSearchedRecipesCount] = useState(0);
    const [loading, setLoading] = useState(false); // State to track loading status

    const fetchData = async () => {
        setLoading(true); // Set loading state to true
        try {
            const data = await searchRecipes(searchTerm, numRecipesToShow);
            setRecipes(data);
            setError('');
            setSearchedRecipesCount(numRecipesToShow);
        } catch (error) {
            setRecipes([]);
            setError('No recipes found. Please try a different search term.');
        }
        setLoading(false); // Set loading state to false after fetching data
    };

    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if (searchTerm.trim() !== '') {
            fetchData();
        }
    };

    const handleLoadMore = () => {
        setNumRecipesToShow(prev => Math.min(prev + 12, 100));
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
                {loading && <Loader />} {/* Render Loader component while loading */}
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
