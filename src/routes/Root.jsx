import { Outlet } from "react-router-dom";
import { Header } from "../Conponents/Header/Top/Header";
import { Main } from "../Conponents/Layout/Main/Main";
import { Footer } from "../Conponents/Footer/Footer";

const list = [
    { 
        link: 'women', 
        title: 'Женщины', 
        categories: [
        { link: 'bras', title: 'Бюстгальтеры'},
        { link: 'panties', title: 'Трусы'},
        { link: 'socks', title: 'Носки'},
        { link: 'bathrobes', title: 'Халаты'},
        { link: 'thermsl', title: 'Термобелье'},
        { link: 'pijamas', title: 'Пижамы'},
        ]
    },
    { link: 'men', title: 'Мужчины', categories: [
        { link: 'panties', title: 'Трусы'},
        { link: 'socks', title: 'Носки'},
        { link: 'bathrobes', title: 'Халаты'},
        { link: 'thermsl', title: 'Термобелье'},
        ] },
];


export const Root = () => (
    <>
        <Header list={list} />
        <Main>
            <Outlet/>
        </Main>
        <Footer list={list}/>
    </>
)