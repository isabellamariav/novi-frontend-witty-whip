import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from '../src/components/navigation/Navigation.jsx';
import AboutPage from './pages/aboutPage/About';
import AllRecipesPage from './pages/allRecipesPage/AllRecipes.jsx';
import HomePage from './pages/homePage/Home';
import ProfilePage from './pages/profilePage/Profile';
import QuestionnairePage from './pages/questionnairePage/Questionnaire';
import SignInPage from './pages/signInPage/SignIn';
import SignUpPage from './pages/signUpPage/SignUp';
import NotFoundPage from './pages/notFoundPage/NotFound.jsx';
import Background from "./components/background/Background.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
    return (
        <Router>
            <Background />
            <Navigation />
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/all-recipes" element={<AllRecipesPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/questionnaire" element={<QuestionnairePage />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
