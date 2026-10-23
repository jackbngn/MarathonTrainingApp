import OptionCard from '../components/OptionCard';
import StepNav from '../components/StepNav';
import StepProgress from '../components/StepProgress';
import '../css/Screens.css';
import { useState } from 'react';

function Goal({ onBack, onNext }: { onBack: () => void; onNext: () => void }) {
	const [goal, setGoal] = useState('');

	return (
		<div className="screen">
			<StepProgress step={1} total={5} />
			<div className="panel">
				<h1>What's your running goal?</h1>
				<OptionCard
					onClick={() => setGoal('race')}
					selected={goal === 'race'}
					title="Train for a race"
					description="I have a race on the calendar"
				/>
				<OptionCard
					onClick={() => setGoal('personal')}
					selected={goal === 'personal'}
					title="A personal goal"
					description="Build a habit, get fit, or run farther"
				/>
				<StepNav
					back="Back"
					next="Next"
					onBack={onBack}
					onNext={onNext}
					disabled={goal === ''}
				/>
			</div>
		</div>
	);
}
export default Goal;
