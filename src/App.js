import { Routes, Route} from 'react-router-dom';
import './App.css';
import './assets/css/fontawesome.css';
import './assets/css/templatemo-cyborg-gaming.css';
import './assets/css/owl.css';
import './assets/css/animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/hompage';
import NotFoundPage from './pages/404';
import Tournament from './pages/tournament';
import SpecificTournament from './pages/specific_tournament';
import SpecificMatch from './pages/specific_match';
import Matches from './pages/matches';

function App() {
  return (
    <Routes>
        <Route path="/" element={HomePage()} />
        <Route path="/tournament" element={Tournament()} />
        <Route path="/tournament/:id" element={SpecificTournament()} />
        <Route path="/matches" element={Matches()} />
        <Route path="/matches/:id" element={SpecificMatch()} />
        <Route path="*" element={NotFoundPage()} />
    </Routes>
  );
}

export default App;
