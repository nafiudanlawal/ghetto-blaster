import './App.scss';
import LandingPgae from './pages/landing';
import MusicPlayer from './pages/login';
let user = false;

function App() {
	if (user) {
		return (<MusicPlayer />);
	} else {
		return (<LandingPgae />);
	}
}

export default App;
