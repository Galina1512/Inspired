import { Top } from "../Top/Top.jsx";
import { Navigation } from "../Navigation/Navigation";
import s from './Header.module.scss';

export const Header = () => (
    <header className={s.header}>
    <Top/>
    <Navigation/>
        
    </header>
)