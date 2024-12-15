import AboutPage from "./pages/about";
import LandscapesInfo from "./pages/categories/landscapes/info";
import LandscapesMoreInfo from "./pages/categories/landscapes/moreInfo";
import IndexPage from "./pages/index";
import {LandscapesPage, LandscapesPageHospedaje,
    LandscapesPageEsculturas, LandscapesPageRestaurantes
} from "./pages/landscapes";
import Layout from "./pages/layout/layout";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<IndexPage />} />

                    <Route path="/about" element={<AboutPage />} />

                    <Route path="/landscapes" element={<LandscapesPage />} />
                    <Route path="/hospedaje" element={<LandscapesPageHospedaje />} />
                    <Route path="/esculturas" element={<LandscapesPageEsculturas />} />
                    <Route path="/restaurantes" element={<LandscapesPageRestaurantes />} />
                    <Route
                        path="/info/landscapes"
                        element={<LandscapesInfo />}
                    />
                    <Route
                        path="/more_info/landscapes"
                        element={<LandscapesMoreInfo />}
                    />
                </Route>
            </Routes>
        </>
    );
}

export default App;
