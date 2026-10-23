import './css/App.css';
import Goal from './screens/Goal';
import Welcome from './screens/Welcome';
import Level from './screens/Level';
import { useState } from 'react';

function App() {
	const [screen, setScreen] = useState('goal');
	return (
		<>
			{screen === 'welcome' && <Welcome />}
			{screen === 'goal' && (
				<Goal
					onBack={() => setScreen('welcome')}
					onNext={() => setScreen('level')}
				/>
			)}
			{screen === 'level' && (
				<Level onBack={() => setScreen('goal')} onNext={() => setScreen('')} />
			)}
		</>
	);
}

export default App;
