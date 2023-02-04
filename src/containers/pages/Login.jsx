import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
	const [user, setUsuario] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = e => {
		if (user === '' || password === '') {
			setError('Fill in all the fields');
			return;
		}
		e.preventDefault();
		const users = JSON.parse(localStorage.getItem('users')) || [];
		if (users.user !== user) {
			setError('User not found');
		}

		if (users.password === password) {
			localStorage.setItem('users', JSON.stringify(users));
			sessionStorage.setItem('isLoggedIn',true)
			window.location.href = '/';
		} else {
			setError('Incorrect password');
		}
	};

	return (
		<div className="background">
			<div className="login">
				<div className="form">
					<h2>Login</h2>
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
						<button onClick={handleSubmit}>Login</button>
					</div>
					<div className="form-element">
						<Link to={'/signup'}>
							<button>SignUp</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
