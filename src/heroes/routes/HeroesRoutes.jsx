import {Navbar} from "../../ui/index.js";
import {Navigate, Route, Routes} from "react-router-dom";
import {DcPage, MarvelPage, SearchPage, HeroPage} from "../pages/index.js";

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar/>

            <div className="container">
                <Routes>
                    <Route path="marvel" element={<MarvelPage/>} />
                    <Route path="dc" element={<DcPage/>} />
                    <Route path="search" element={<SearchPage/>} />
                    <Route path="hero/:id" element={<HeroPage/>} />


                    <Route path="/" element={<Navigate to="/marvel"/>} />
                </Routes>
            </div>
        </>
    )
}
