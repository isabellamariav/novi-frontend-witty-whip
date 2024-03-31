// AllRecipes.jsx
import { useState, useEffect } from 'react';
import RecipeCard from '../../components/recipeCard/RecipeCard.jsx';
import Input from '../../components/input/Input.jsx';
import CardButton from '../../components/cardButton/CardButton.jsx';
import { getRandomRecipes, searchRecipes } from '../../services/api.js';
import './AllRecipes.css'

const AllRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState('');
    const [numRecipesToShow, setNumRecipesToShow] = useState(12);
    const [searchedRecipesCount, setSearchedRecipesCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let data;
                if (searchTerm === '') {
                    data = await getRandomRecipes(numRecipesToShow);
                    setSearchedRecipesCount(0);
                } else {
                    data = await searchRecipes(searchTerm, numRecipesToShow);
                    setSearchedRecipesCount(numRecipesToShow);
                }
                setRecipes(data);
                setError('');
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
        if (searchTerm === '') {
            setNumRecipesToShow(prev => prev + 12);
        } else {
            setNumRecipesToShow(prev => prev + 12);
            setSearchedRecipesCount(prev => prev + 12);
        }
    };

    return (
        <div className="all-recipes">
            <div className="search-bar">
                <Input
                    label="Search recipe"
                    type="text"
                    name="search"
                    placeholder="Enter recipe name"
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

export default AllRecipes;
