import '../css/OptionCard.css';

function OptionCard({
	title,
	description,
	selected,
	onClick,
}: {
	title: string;
	description: string;
	selected: boolean;
	onClick: () => void;
}) {
	return (
		<div className={selected ? 'card selected' : 'card'} onClick={onClick}>
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	);
}

export default OptionCard;
