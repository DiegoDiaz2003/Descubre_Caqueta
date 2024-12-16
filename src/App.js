import AboutPage from "./pages/about";
import HotelCaquetaInfo from "./pages/categories/hosting/hotelCaqueta/info";
import HotelCaquetaMoreInfo from "./pages/categories/hosting/hotelCaqueta/moreInfo";
import DanubioInfo from "./pages/categories/landscapes/danubio/info";
import DanubioMoreInfo from "./pages/categories/landscapes/danubio/moreInfo";
import EcoparqueInfo from "./pages/categories/landscapes/ecoparque/info";
import MarcoPoloInfo from "./pages/categories/landscapes/marcoPolo/info";
import MarcoPoloMoreInfo from "./pages/categories/landscapes/marcoPolo/moreInfo";
import MohanInfo from "./pages/categories/landscapes/mohan/info";
import MohanMoreInfo from "./pages/categories/landscapes/mohan/moreInfo";
import HostingPage from "./pages/hosting";
import IndexPage from "./pages/index";
import {LandscapesPage, LandscapesPageHospedaje,
    LandscapesPageEsculturas, LandscapesPageRestaurantes
} from "./pages/landscapes";
import Layout from "./pages/layout/layout";
import { Route, Routes } from "react-router-dom";
import MuseumsPage from "./pages/museums";
import RestaurantPage from "./pages/restaurant";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<IndexPage />} />

                    <Route path="/about" element={<AboutPage />} />

                    <Route path="/landscapes" element={<LandscapesPage />} />

                    <Route path="/info/danubio" element={<DanubioInfo />} />
                    <Route
                        path="/more_info/danubio"
                        element={<DanubioMoreInfo />}
                    />

                    <Route path="/info/mohan" element={<MohanInfo />} />
                    <Route
                        path="/more_info/mohan"
                        element={<MohanMoreInfo />}
                    />

                    <Route path="/info/ecoparque" element={<EcoparqueInfo />} />

                    <Route
                        path="/info/marco_polo"
                        element={<MarcoPoloInfo />}
                    />
                    <Route
                        path="/more_info/marco_polo"
                        element={<MarcoPoloMoreInfo />}
                    />

                    <Route path="/hosting" element={<HostingPage />} />

                    <Route
                        path="/info/hotel_caqueta"
                        element={<HotelCaquetaInfo />}
                    />
                    <Route
                        path="/more_info/hotel_caqueta"
                        element={<HotelCaquetaMoreInfo />}
                    />

                    <Route path="/museums" element={<MuseumsPage />} />

                    <Route
                        path="/info/hotel_caqueta"
                        element={<HotelCaquetaInfo />}
                    />
                    <Route
                        path="/more_info/hotel_caqueta"
                        element={<HotelCaquetaMoreInfo />}
                    />

                    <Route path="/restaurants" element={<RestaurantPage />} />

                    <Route
                        path="/info/hotel_caqueta"
                        element={<HotelCaquetaInfo />}
                    />
                    <Route
                        path="/more_info/hotel_caqueta"
                        element={<HotelCaquetaMoreInfo />}
                    />
                </Route>
            </Routes>
        </>
    );
}

export default App;
