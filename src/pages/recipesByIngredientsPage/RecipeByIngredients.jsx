import { useState, useEffect } from 'react';
import Input from '../../components/input/Input.jsx';
import CardButton from '../../components/cardButton/CardButton.jsx';
import RecipeCard from '../../components/recipeCard/RecipeCard.jsx'; // assuming you have a RecipeCard component
import { searchRecipes } from '../../services/api.js';
import './RecipeByIngredients.css';

const RecipeByIngredients = () => {
    const [recipes, setRecipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState('');
    const [numRecipesToShow, setNumRecipesToShow] = useState(12);
    const [searchedRecipesCount, setSearchedRecipesCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await searchRecipes(searchTerm, numRecipesToShow);
                setRecipes(data);
                setError('');
                setSearchedRecipesCount(numRecipesToShow);
            } catch (error) {
                setRecipes([]);
                setError('No recipes found. Please try a different search term.');
            }
        };

        fetchData();
    }, [searchTerm, numRecipesToShow]);

    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = () => {
        if (searchTerm.trim() !== '') {
            setSearchTerm(searchTerm.trim());
        }
    };

    const handleLoadMore = () => {
        setNumRecipesToShow(prev => Math.min(prev + 12, 100)); // Limit to a maximum of 100 recipes
    };

    return (
        <div className="recipe-by-ingredients">
            <div className="search-bar">
                <Input
                    label="Search recipe by ingredients"
                    type="text"
                    name="ingredients"
                    placeholder="Enter ingredients separated by commas"
                    onChange={handleSearchInputChange}
                />
                <CardButton onClick={handleSearchSubmit} isActive={true}>
                    Search
                </CardButton>
            </div>
            {error && <p className="error-message">{error}</p>}
            {recipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
            {recipes.length > 0 && searchedRecipesCount < 100 && (
                <CardButton onClick={handleLoadMore} isActive={true}>
                    Load More
                </CardButton>
            )}
        </div>
    );
};

export default RecipeByIngredients;
