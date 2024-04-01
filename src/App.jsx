import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Navigation from '../src/components/navigation/Navigation.jsx';
import AboutPage from './pages/aboutPage/About';
import AllRecipesPage from './pages/allRecipesPage/AllRecipes.jsx';
import HomePage from './pages/homePage/Home';
import QuestionnairePage from './pages/questionnairePage/Questionnaire';
import NotFoundPage from './pages/notFoundPage/NotFound.jsx';
import Background from "./components/background/Background.jsx";
import Footer from "./components/footer/Footer.jsx";
import AuthenticationPage from "./pages/authenticationPage/Authentication.jsx";
import RecipeDetails from "./pages/recipeDetailsPage/RecipeDetails.jsx";
import RecipeByIngredients from "./pages/recipesByIngredientsPage/RecipeByIngredients.jsx";
import { auth } from './firebase/config.js';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Router>
            <Background />
            <Navigation />
            <Routes>
                {isLoggedIn ? (
                    <>
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/all-recipes" element={<AllRecipesPage />} />
                        <Route path="/questionnaire" element={<QuestionnairePage />} />
                        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
                        <Route path="/recipe-by-ingredients" element={<RecipeByIngredients />} />
                        <Route path="/" element={<HomePage />} />
                    </>
                ) : (
                    <Route path="*" element={<Navigate to="/authentication" />} />
                )}
                <Route path="/authentication" element={<AuthenticationPage setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;


