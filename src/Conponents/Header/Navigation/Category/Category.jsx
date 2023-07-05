import { NavLink } from 'react-router-dom';
import s from './Category.module.scss';


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
    // { link: 'men', title: 'Мужчины', categories: [
    //     { link: 'panties', title: 'Трусы'},
    //     { link: 'socks', title: 'Носки'},
    //     { link: 'bathrobes', title: 'Халаты'},
    //     { link: 'thermsl', title: 'Термобелье'},
    //     ] },
];


export const Category= () => (
<div className={s.category}>
    <ul className={s.category}>
    {list.categories.map((category => 
        <li key={category.link}>
            <NavLink className={s.link} to={`${list.link}/${category.link}`}>
                {category.title}
            </NavLink>
        </li>
        ))}
    </ul>
</div>
    
)