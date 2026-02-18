import s from './Header.module.css'
import burger from './Burger.png'
export const Header = () => {
    return (
        <div className={s.header}>
            <img src={burger} id={'hw5-burger-menu'} alt='Header' />
            <span className={s.title} id={'hw5-junior-plus-link'}>Junior+</span>
        </div>
    );
};

