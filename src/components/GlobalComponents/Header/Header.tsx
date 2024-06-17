import Logo from "./Icons/Logo";
import s from './Header.module.scss';

const Header = () => {
    return (
        <header className={s.header}>
            <nav className={s.header__nav}>
                <a href="/" className={s.header__navLink}>
                    <Logo className={s.header__navLogo} />
                </a>
            </nav>
        </header>
    );
}

export default Header;