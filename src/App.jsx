import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from '../src/components/navigation/Navigation.jsx';
import AboutPage from './pages/aboutPage/About';
import AllRecipesPage from './pages/allRecipesPage/AllRecipes.jsx';
import HomePage from './pages/homePage/Home';
import ProfilePage from './pages/profilePage/Profile';
import QuestionnairePage from './pages/questionnairePage/Questionnaire';
import NotFoundPage from './pages/notFoundPage/NotFound.jsx';
import Background from "./components/background/Background.jsx";
import Footer from "./components/footer/Footer.jsx";
import AuthenticationPage from "./pages/authenticationPage/Authentication.jsx";

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
            <Route path="/authentication" element={<AuthenticationPage />} />
            {/*<Route path="/signin" element={<SignInPage />} />*/}
            {/*<Route path="/signup" element={<SignUpPage />} />*/}
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
    </Router>
);
}

export default App;

// function App() {
//     const user = useSelector(selectUsers);
//
//     return (
//         <Provider store={store}> {/* Wrap your entire application with Provider */}
//             <>
//                 <Navigation />
//                 <Background />
//                 {
//                     user.currentUser ?
//                         <BrowserRouter>
//                             <Routes>
//                                 <Route path="/home" element={<HomePage />} />
//                                 <Route path="/all-recipes" element={<AllRecipesPage />} />
//                                 <Route path="/questionnaire" element={<QuestionnairePage />} />
//                                 <Route path="/profile" element={<ProfilePage />} />
//                                 <Route path="/about" element={<AboutPage />} />
//                                 <Route path="*" element={<NotFoundPage />} />
//                             </Routes>
//                         </BrowserRouter>
//                         :
//                         <AuthenticationPage />
//                 }
//                 <Footer />
//             </>
//         </Provider>
//     )
// }
//
// export default App;
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////


