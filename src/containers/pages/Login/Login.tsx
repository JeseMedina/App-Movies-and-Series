import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import style from './style.module.scss';

function Login() {
	const [user, setUsuario] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [error, setError] = useState<string>('');
	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
		if (user === '' || password === '') {
			setError('Fill in all the fields');
			return;
		}
		e.preventDefault();
		const users = JSON.parse(localStorage.getItem('users') || '[]');
		if (users.user !== user) {
			setError('User not found');
		}

		if (users.password === password) {
			localStorage.setItem('users', JSON.stringify(users));
			sessionStorage.setItem('isLoggedIn', 'true');
			navigate('/');
		} else {
			setError('Incorrect password');
		}
	};

	return (
		<div className={style.background}>
			<div className={style.login}>
				<div className={style.form}>
					<h1>Login</h1>
					{error && <p className={style.error}>{error}</p>}
					<div className={style.formElement}>
						<label>
							User
							<input type="text" value={user} onChange={e => setUsuario(e.target.value)} />
						</label>
					</div>
					<div className={style.formElement}>
						<label>
							Password
							<input type="password" value={password} onChange={e => setPassword(e.target.value)} />
						</label>
					</div>
					<div className={style.formElement}>
						<button onClick={handleSubmit}>
							<FontAwesomeIcon icon={faSignInAlt} />
							Login
						</button>
					</div>
					<div className={style.formElement}>
						<Link to={'/signup'}>
							<button className={style.outline}>
								<FontAwesomeIcon icon={faUserPlus} />
								SignUp
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
