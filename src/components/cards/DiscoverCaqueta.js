import styled from "@emotion/styled/macro";
import Logo from "../../assets/images/logo.png";

export default function DiscoverCaqueta({ title, text, image }) {
    return (
        <Card>
            <Texts>
                <h1>Descubre Caqueta</h1>
                <p>Explora y vive la magia de Caqueta desde la comodidad de tu hogar.</p>
            </Texts>
            <ImageContainer>
                <Image src={Logo} alt="" />
            </ImageContainer>
        </Card>
    );
}

const Card = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    padding: 2rem;
    max-width: 400px;
`;

const Texts = styled.div`
    h2 {
        font-size: 2rem;
    }

    p {
        font-size: 1.5rem;
    }
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
`;

const Image = styled.img`
    width: 100%;
`;
