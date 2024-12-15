import AboutPage from "./pages/about";
import IndexPage from "./pages/index";
import LandscapesPage from "./pages/landscapes";
import Layout from "./pages/layout/layout";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<IndexPage />} />
                    <Route path="/paisajes" element={<LandscapesPage />} />
                    <Route path="/acerca_de" element={<AboutPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
