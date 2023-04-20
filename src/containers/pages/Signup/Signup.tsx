import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import style from './style.module.scss';

function Signup() {
	const [user, setUsuario] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [password2, setPassword2] = useState<string>('');
	const [error, setError] = useState<string>('');

	const watchList: string[] = [];

	const handleSignup = (): void => {
		if (user === '' || password === '' || password2 === '') {
			setError('Fill in all the fields');
			return;
		}

		const navigate = useNavigate();

		if (password === password2) {
			localStorage.setItem('users', JSON.stringify({ user, password, watchList }));
			sessionStorage.setItem('isLoggedIn', 'false');
			navigate('/login');
		} else {
			setError('Passwords do not match');
		}
	};

	return (
		<div className={style.background}>
			<div className={style.signup}>
				<div className={style.form}>
					<h1>SignUp</h1>
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
						<label>
							Repeat Password
							<input
								type="password"
								value={password2}
								onChange={e => setPassword2(e.target.value)}
							/>
						</label>
					</div>
					<div className={style.formElement}>
						<button onClick={handleSignup}>
							<FontAwesomeIcon icon={faUserPlus} />
							SignUp
						</button>
					</div>
					<div className={style.formElement}>
						<Link to={'/login'}>
							<button className={style.outline}>
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
