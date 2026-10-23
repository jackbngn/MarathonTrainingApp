import '../css/StepNav.css';

function StepNav({
	back,
	next,
	onBack,
	onNext,
	disabled,
}: {
	back: string;
	next: string;
	onBack: () => void;
	onNext: () => void;
	disabled: boolean;
}) {
	return (
		<div className="nav">
			<button className="back" onClick={onBack}>
				{back}
			</button>
			<button className="next" onClick={onNext} disabled={disabled}>
				{next}
			</button>
		</div>
	);
}

export default StepNav;
