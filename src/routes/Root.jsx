import { Outlet } from "react-router-dom";
import { Header } from "../Conponents/Header/Top/Header";
import { Main } from "../Conponents/Layout/Main/Main";
import { Footer } from "../Conponents/Footer/Footer";

export const Root = () => (
    <>
        <Header/>
        <Main>
            <Outlet/>
        </Main>
        <Footer/>
    </>
)