import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategory, fethcGender } from "../../features/goodsSlice.js";
import { setActiveGender } from "../../features/navigationSlice";
import { Goods } from "../Goods/Goods.jsx";
import { Banner } from "../Banner/Banner.jsx";

export const MainPage = () => {
    const { gender, category} = useParams();
    const dispatch = useDispatch();

    const { activeGender, categories, genderList } = useSelector(state => state.navigation);
    const genderData = categories[activeGender];

    const categoryData = genderData?.list.find((item) => item.slug === category);

    useEffect(() => {
        if (gender) {
            dispatch(setActiveGender(gender));
        } else if (genderList[0]) {
            dispatch(setActiveGender(genderList[0]));
            dispatch(fethcGender(genderList[0]));
        }
    }, [gender, dispatch, genderList]);

    useEffect(() => {
        if (gender && category) {
            dispatch(fetchCategory({gender, category}));
            return;
        }

        if (gender) {
            dispatch(fethcGender(gender));
            return;
        }
    }, [gender, category, dispatch]);

    return (
        <>
            {!category && <Banner data={genderData?.banner} />}
            <Goods categoryData={categoryData} />
        </>
        )
}
