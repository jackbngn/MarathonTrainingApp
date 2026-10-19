import OptionCard from '../components/OptionCard';
import StepNav from '../components/StepNav';
import '../css/Goal.css';

function Goal() {
	return (
		<div className="goal">
			<div id="step">Step 1 of 5</div>
			<div className="track">
				<div className="fill"></div>
			</div>
			<h1>What's your running goal?</h1>
			<OptionCard
				title="Train for a race"
				description="I have a race on the calendar"
			/>
			<OptionCard
				title="A personal goal"
				description="Build a habit, get fit, or run farther"
			/>
			<StepNav back="Back" next="Next" />
		</div>
	);
}
export default Goal;
