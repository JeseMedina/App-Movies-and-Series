import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

function Signup() {
	const [user, setUsuario] = useState('');
	const [password, setPassword] = useState('');
	const [password2, setPassword2] = useState('');
	const [error, setError] = useState('');

	const watchList = [];

	const handleSignup = () => {
		if (user === '' || password === '' || password2 === '') {
			setError('Fill in all the fields');
			return;
		}
		if (password === password2) {
			localStorage.setItem('users', JSON.stringify({ user, password, watchList }));
			sessionStorage.setItem('isLoggedIn', false);
			window.location.href = '/login';
		} else {
			setError('Passwords do not match');
		}
	};

	return (
		<div className="background">
			<div className="login">
				<div className="form">
					<h1>SignUp</h1>
					{error && <p className="error">{error}</p>}
					<div className="form-element">
						<label>
							User
							<input type="text" value={user} onChange={e => setUsuario(e.target.value)} />
						</label>
					</div>
					<div className="form-element">
						<label>
							Password
							<input type="password" value={password} onChange={e => setPassword(e.target.value)} />
						</label>
					</div>
					<div className="form-element">
						<label>
							Repeat Password
							<input
								type="password"
								value={password2}
								onChange={e => setPassword2(e.target.value)}
							/>
						</label>
					</div>
					<div className="form-element">
						<button onClick={handleSignup}>
							<FontAwesomeIcon icon={faUserPlus} />
							SignUp
						</button>
					</div>
					<div className="form-element">
						<Link to={'/login'}>
							<button className="outline">
								<FontAwesomeIcon icon={faSignInAlt} />
								Login
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Signup;
