import '../css/StepNav.css';

function StepNav({ back, next }: { back: string; next: string }) {
	return (
		<div className="nav">
			<button className="back">{back}</button>
			<button className="next">{next}</button>
		</div>
	);
}

export default StepNav;
