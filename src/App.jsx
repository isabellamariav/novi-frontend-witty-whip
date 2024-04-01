import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import RecipeByIngredients from "./pages/recipesByIngredientsPage/RecipeByIngredients.jsx"; // Import the RecipeByIngredients component

function App() {
    return (
        <Router>
            <Background />
            <Navigation />
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/all-recipes" element={<AllRecipesPage />} />
                <Route path="/questionnaire" element={<QuestionnairePage />} />
                <Route path="/authentication" element={<AuthenticationPage />} />
                <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
                <Route path="/recipe-by-ingredients" element={<RecipeByIngredients />} /> {/* Add this line for RecipeByIngredients */}
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
