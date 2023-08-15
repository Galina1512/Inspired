import { Outlet } from "react-router-dom";
import { Header } from "../Conponents/Header/Top/Header";
import { Main } from "../Conponents/Layout/Main/Main";
import { Footer } from "../Conponents/Footer/Footer";
import ScrollToTop from '../ScrollTop.js';


export const Root = () => (
  <>
    <ScrollToTop />
    <Header />
    <Main>
      <Outlet />
    </Main>
    <Footer />
  </>
);
