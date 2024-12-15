import { Navbar, Nav } from "react-bootstrap";
import styled from "@emotion/styled";
import { useState } from "react";
import Logo from "../../assets/images/logo.png";
import * as color from "../../theme"

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <NavSection>
            <Navbar expand="lg" className="container">
                <LogoImage src={Logo} alt="Company Logo" />
                <ToggleIcon
                    aria-controls="basic-navbar-nav"
                    onClick={handleClick}
                />
                <NavbarCollapseStyles
                    id="basic-navbar-nav"
                    className={`${isOpen ? "show" : ""}`}
                >
                    <NavigationLinks>
                        <NavLink href="/">Inicio</NavLink>
                        <NavLink href="/acerca_de">Acerca de</NavLink>
                    </NavigationLinks>
                </NavbarCollapseStyles>
            </Navbar>
        </NavSection>
    );
}

const NavSection = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    font-weight: bold;
    background: ${color.whiteColor};
`;

const LogoImage = styled.img`
    width: 100%;
    max-width: 70px;

    @media (max-width: 600px) {
        max-width: 13%;
    }
`;

const ToggleIcon = styled(Navbar.Toggle)`
    border: none;

    @media (max-width: 300px) {
        font-size: 5vw;
        padding: 0.5vh 2vw;
        border: none;
    }
`;

const NavbarCollapseStyles = styled(Navbar.Collapse)`
    justify-content: flex-end;
`;

const NavigationLinks = styled(Nav)`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 991px) {
        align-items: start;
        justify-content: start;
    }
`;

const NavLink = styled(Nav.Link)`
    transition: border-bottom 0.5s ease;
    font-size: 20px !important;
    padding: 2%;
    transition: border-color 0.3s;
    border: 2px solid transparent;
    text-decoration-line: none;

    @media (max-width: 400px) {
        font-size: 5vw !important;
    }
`;