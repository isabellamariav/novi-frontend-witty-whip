import {Routes, Route, Navigate} from 'react-router-dom';
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
import { useAuth } from './context/AuthContext';

function App() {

    const { currentUser } = useAuth();

    return (
        <>
            <Background/>
            <Navigation/>
            <main className="content">
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/all-recipes" element={currentUser ? <AllRecipesPage /> : <Navigate to="/authentication"/>}/>
                    <Route path="/questionnaire" element={currentUser ? <QuestionnairePage /> : <Navigate to="/authentication"/>}/>
                    <Route path="/recipe/:recipeId" element={currentUser ? <RecipeDetails />: <Navigate to="/authentication"/>}/>
                    <Route path="/recipe-by-ingredients" element={currentUser ? <RecipeByIngredients />: <Navigate to="/authentication"/>}/>
                    <Route path="/authentication" element={<AuthenticationPage />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </main>
            <Footer/>
        </>
    );
}

export default App;
