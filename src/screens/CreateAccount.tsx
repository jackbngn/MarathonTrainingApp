import '../css/CreateAccount.css';

function CreateAccount() {
	return (
		<div className="createAccount">
			<div className="panel">
				<h1>Create your account</h1>
				<p>
					Take a minute. Then you'll answer a few questions to build your plan.
				</p>
				<label htmlFor="firstName">First name</label>
				<input type="fistName" id="fistName" placeholder="John" />
				<label htmlFor="email" id="email">
					Email
				</label>
				<input type="email" id="email" placeholder="you@example.com" />
				<label htmlFor="password" id="password">
					Password
				</label>
				<input type="password" id="password" placeholder="Password" />
				<p id="password">At least 8 charcters</p>
			</div>
		</div>
	);
}

export default CreateAccount;
