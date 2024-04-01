import HomeButton from "../../components/homeButton/HomeButton.jsx";
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <main className="container">
            <h1>Welcome!</h1>
            <h2>Find the perfect recipe with Witty Whip</h2>
            <h3>A smart and easy way to find your recipes</h3>
            <nav className="button-container">
                <Link to="/all-recipes">
                    <HomeButton text="Browse and Search Recipes" />
                </Link>
                <Link to="/questionnaire">
                    <HomeButton text="Find recipes through Questionnaire" />
                </Link>
                <Link to="/recipe-by-ingredients">
                    <HomeButton text="Check out your favorite recipes" />
                </Link>
            </nav>
        </main>
    );
};

export default Home;
