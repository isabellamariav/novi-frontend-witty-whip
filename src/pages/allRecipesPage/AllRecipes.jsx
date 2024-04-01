import { useState, useEffect } from 'react';
import RecipeCard from '../../components/recipeCard/RecipeCard.jsx';
import Input from '../../components/input/Input.jsx';
import CardButton from '../../components/cardButton/CardButton.jsx';
import { getRandomRecipes, searchRecipes } from '../../services/api.js';
import SideCard from '../../components/sideCard/SideCard.jsx';
import Loader from '../../components/loader/Loader.jsx';
import './AllRecipes.css';

const AllRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState('');
    const [numRecipesToShow, setNumRecipesToShow] = useState(12);
    const [searchedRecipesCount, setSearchedRecipesCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [initialLoad, setInitialLoad] = useState(true);

    useEffect(() => {
        const fetchRandomRecipes = async () => {
            setLoading(true);
            try {
                const data = await getRandomRecipes(numRecipesToShow);
                setRecipes(data);
                setError('');
            } catch (error) {
                setRecipes([]);
                setError('Failed to fetch random recipes. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        if (initialLoad) {
            fetchRandomRecipes();
            setInitialLoad(false);
        }
    }, [initialLoad, numRecipesToShow]);

    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = async (event) => {
        event.preventDefault(); // Prevent form submission
        setLoading(true);
        try {
            const data = await searchRecipes(searchTerm, numRecipesToShow);
            setRecipes(data);
            setSearchedRecipesCount(numRecipesToShow);
            setError('');
        } catch (error) {
            setRecipes([]);
            setError('No recipes found. Please try a different search term.');
        } finally {
            setLoading(false);
        }
    };

    const handleLoadMore = () => {
        setNumRecipesToShow(prev => prev + 12);
        setSearchedRecipesCount(prev => prev + 12);
    };

    return (
        <main className="all-recipes">
            <SideCard>
                <form className="search-bar" onSubmit={handleSearchSubmit}>
                    <h2>All recipes</h2>
                    <Input
                        label="Search recipe"
                        type="text"
                        name="search"
                        placeholder="Enter recipe name"
                        value={searchTerm}
                        onChange={handleSearchInputChange}
                    />
                    <CardButton type="submit" isActive={true}>
                        Search
                    </CardButton>
                </form>
            </SideCard>
            <section className="recipe-list">
                {loading && <Loader/>}
                {error && !loading && <p className="error-message">{error}</p>}
                {!loading && recipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe}/>
                ))}
                {!loading && recipes.length > 0 && searchedRecipesCount < 100 && (
                    <CardButton onClick={handleLoadMore} isActive={true}>
                        Load More
                    </CardButton>
                )}
            </section>
        </main>
    );
};

export default AllRecipes;
