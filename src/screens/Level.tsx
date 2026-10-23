import OptionCard from '../components/OptionCard';
import StepNav from '../components/StepNav';
import StepProgress from '../components/StepProgress';
import '../css/Screens.css';
import { useState } from 'react';

function Level({ onBack, onNext }: { onBack: () => void; onNext: () => void }) {
	const [level, setLevel] = useState('');

	return (
		<div className="screen">
			<StepProgress step={2} total={5} />
			<div className="panel">
				<h1>What is your current level?</h1>
				<OptionCard
					title="Beginner"
					description="I can run 1-3 miles"
					onClick={() => setLevel('beginner')}
					selected={level === 'beginner'}
				/>
				<OptionCard
					title="Intermediate"
					description="I can run 3-6 miles without stopping"
					onClick={() => setLevel('intermediate')}
					selected={level === 'intermediate'}
				/>
				<OptionCard
					title="Advance"
					description="I run 6+ miles regularly"
					onClick={() => setLevel('advance')}
					selected={level === 'advance'}
				/>
				<StepNav
					back="Back"
					next="Next"
					onBack={onBack}
					onNext={onNext}
					disabled={level === ''}
				/>
			</div>
		</div>
	);
}

export default Level;
