import '../css/CreateAccount.css';

function CreateAccount() {
	return (
		<div className="createAccount">
			<button className="backButton">&larr; Back</button>
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
				<p id="passwordText">At least 8 charcters</p>
				<button id="create">Create account</button>
				<div className="divider">
					<div className="line"></div>
					<span>or</span>
					<div className="line"></div>
				</div>
				<button className="social">Continue with Google</button>
				<button className="social">Continue with Apple</button>
			</div>
			<p className="terms">
				By creating an account you agree to the Terms and Privacy Policy.
			</p>
			<p className="signInText">
				Already have an account? <button className="linkButton">Sign in</button>
			</p>
		</div>
	);
}

export default CreateAccount;
