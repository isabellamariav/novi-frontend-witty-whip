import HomeButton from "../../constants/homeButton/HomeButton.jsx";
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="container"> {/* Add container class here */}
            <h1>Welcome!</h1>
            <h2>Find the perfect recipe with Witty Whip</h2>
            <h3>A smart and easy way to find your recipes</h3>
            <div className="button-container">
                <Link to="/all-recipes">
                    <HomeButton text="Browse, Search and Filter Recipes" />
                </Link>
                <Link to="/questionnaire">
                    <HomeButton text="Find recipes through Questionnaire" />
                </Link>
                <Link to="/profile">
                    <HomeButton text="Check out your favorite recipes" />
                </Link>
            </div>
        </div>
    );
};

export default Home;
