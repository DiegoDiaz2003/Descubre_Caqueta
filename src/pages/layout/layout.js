import { Outlet } from "react-router-dom";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import styled from "@emotion/styled/macro";

function Layout() {
    return (
        <PageWrapper>
            <NavBar />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </PageWrapper>
    );
}

export default Layout;

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh; 
`;

const Main = styled.main`
    flex-grow: 1; 
    display: flex; 
    align-items: center;
    justify-content: center; 
`;
