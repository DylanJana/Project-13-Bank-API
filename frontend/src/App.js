// Import all components
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
// Import Pages
import Home from './Pages/Home/Home';
import SignIn from './Pages/SignIn/SignIn';
import Profil from './Pages/Profil/Profil';
import Page404 from './Pages/Page404/Page404';

// Import React Router Dom to use Routes & Route methode
import {Routes, Route, Navigate} from 'react-router-dom';

// Import Global style
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/user' element={<Profil />} />
        <Route path='/404' element={<Page404 />} />
        <Route path='*' element={<Navigate to="404"/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
