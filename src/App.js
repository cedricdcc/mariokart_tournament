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
import TournamentData from './data/tournaments.json';
import MatchData from './data/matches.json';

function App() {

  const data = {
    "TournamentData": TournamentData,
    "MatchData": MatchData
  }

  return (
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/tournament/:TourID" element={<SpecificTournament data={data}/>} />
        <Route exact path="/tournament" element={<Tournament data={data}/>}/>
        <Route path="/matches/:MatchID" element={<SpecificMatch data={data}/>}/>
        <Route exact path="/matches" element={<Matches data={data}/>} />
        <Route path="*" element={<NotFoundPage/>} />
    </Routes>
  );
}

export default App;
