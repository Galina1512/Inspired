import { useLocation, useNavigate, useRouteError } from "react-router-dom";
import s from './ErrorPage.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { fetchColors } from "../../features/colorSlice";
import { fetchNavigation } from "../../features/navigationSlice";

export const ErrorPage =  () => {
    const routeError = useRouteError();
    const { status } = useSelector(state => state.statusServer);

    const lacation = useLocation();
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const timeIdRef = useRef(null);


    useEffect(() => {
        if (status && lacation.pathname === '/404') {
            navigate('/');
        }
    }, [navigate, status, location]);

    useEffect(() => {
        if(!status && location.pathname === '/404') {
            clearInterval(timeIdRef.current);

            timeIdRef.current = setInterval(() => {
                dispatch(fetchColors());
                dispatch(fetchNavigation())
            }, 3000)
        }

        return () => {
            clearInterval(timeIdRef.current);
        }
    }, [dispatch, status, location, ])



    return(
        <div className={s.error}>
            <h2 className={s.title}>Произошла ошибка. Попробуйте позже</h2>
            <p className={s.mnessage}>{routeError?.message ?? 'Неизвестная ошибка'} </p>
        </div>
    );
};