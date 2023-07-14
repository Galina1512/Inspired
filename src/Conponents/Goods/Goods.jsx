import { useSelector } from 'react-redux';
import s from './Goods.module.scss';
import { Container } from '../Layout/Container/Container';
import { Product } from '../Product/Product.jsx';

export const Goods = ({ categoryData }) => {
    const { goodsList } = useSelector(state => state.goods);
    // const { activeGender, categories } = useSelector(state => state.navigation);

    const title = categoryData?.title ?? ' Новинки';

    // ? categories[activeGender]?.list
    // .find((item) => item.slug === category)
    // .title : ' Новинки';


    return (
    <section className={s.goods}>       
    <Container>
        <h2 className={s.title}>{title}</h2>
        <ul className={s.list}>
            {goodsList.map((item) => (
               <li key={item.id}>
                <Product {...item} />
               </li> 
            ))}                
        </ul>            
    </Container>
</section>

) 
}
