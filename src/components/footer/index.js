import styled from "@emotion/styled";
import * as color from "../../theme"

export default function Footer() {
    return (
        <FooterContainer>
            <Icons>
                <i class="bi bi-facebook"/>
                <i class="bi bi-instagram"/>
                <i class="bi bi-telephone-fill"/>
            </Icons>
            <Title>© 2024 DESCUBRE CAQUETA. All Rights Reserved.</Title>
        </FooterContainer>
    );
}

const FooterContainer = styled.footer`
    background: ${color.whiteColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
`;

const Icons = styled.div`
    display: flex;
    gap: 1rem;

    i{
        font-size: 2.3rem;
    }
`;

const Title = styled.h1`
    text-align: center;
    font-size: 20px;
    color: #4e4e4e;
    margin: 0;
`;
