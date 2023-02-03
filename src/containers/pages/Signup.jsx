import { Link } from 'react-router-dom';
import { useState } from 'react';

function Signup() {
	const [user, setUsuario] = useState('');
	const [password, setPassword] = useState('');
	const [password2, setPassword2] = useState('');
	const [error, setError] = useState('');

	const handleSignup = () => {
		if (user === '' || password === '' || password2 === '') {
			setError('Fill in all the fields');
			return;
		}
		if (password === password2) {
			const users = JSON.parse(localStorage.getItem('users')) || [];
			users.push({ user, password });
			localStorage.setItem('users', JSON.stringify(users));
			window.location.href = '/login';
		} else {
			setError('Passwords do not match');
		}
	};

	return (
		<div className="background">
			<div className="login">
				<div className="form">
					<h2>SignUp</h2>
					{error && <p className="error">{error}</p>}
					<div className="form-element">
						<label>User</label>
						<input type="text" value={user} onChange={e => setUsuario(e.target.value)} />
					</div>
					<div className="form-element">
						<label>Password</label>
						<input type="password" value={password} onChange={e => setPassword(e.target.value)} />
					</div>
					<div className="form-element">
						<label>Repeat Password</label>
						<input type="password" value={password2} onChange={e => setPassword2(e.target.value)} />
					</div>
					<div className="form-element">
						<button onClick={handleSignup}>SignUp</button>
					</div>
					<div className="form-element">
						<Link to={'/login'}>
							<button>Login</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Signup;
