import { Top } from "../Top/Top.jsx";
import { Navigation } from "../Navigation/Navigation";
import s from './Header.module.scss';
import { Search } from "../../Search/Search.jsx";

export const Header = () =>  (
    <header className={s.header}>
        <Top />
        <Search />
        <Navigation/>
    </header>
)
