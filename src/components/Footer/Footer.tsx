import style from './style.module.scss';

function Footer(): JSX.Element {
	return (
		<footer className={style.footer}>
			<div className={style.copyright}>© 2022-2023 Jesé, Inc.</div>
		</footer>
	);
}

export default Footer;
