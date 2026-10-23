import '../css/Welcome.css';
import '../css/Screens.css';
import logo from '../assets/logo.svg';

function Welcome() {
	return (
		<div className="welcome">
			<div className="panel">
				<img src={logo} alt="logo" />
				<h1>Start your running journey</h1>
				<p>Answer a few questions and get a plan that fits you</p>
				<label htmlFor="email">Email</label>
				<input id="email" type="email" placeholder="you@example.com" />
				<label htmlFor="password">Password</label>
				<input id="password" type="password" placeholder="Password" />

				<button id="signIn">Sign in</button>
				<button id="createNew">New here? Create account</button>
			</div>
		</div>
	);
}
export default Welcome;
