import '../css/StepProgress.css';

function StepProgress({ step, total }: { step: number; total: number }) {
	const percent = (step / total) * 100;
	return (
		<>
			<div id="step">
				Step {step} of {total}
			</div>
			<div className="track">
				<div className="fill" style={{ width: `${percent}%` }}></div>
			</div>
		</>
	);
}

export default StepProgress;
