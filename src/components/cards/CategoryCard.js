import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";

export default function CategoryCard({ title, text, image,background,url }) {
    return (
        <Card backgroundColor={background}>
            <Texts>
                <Link to={url}>{title}</Link>
                <p>{text}</p>
            </Texts>
            <ImageContainer>
                <Image src={image} alt="" />
            </ImageContainer>
        </Card>
    );
}

const Card = styled.div`
    display: flex;
    background: ${({ backgroundColor }) => backgroundColor};
    border-radius: 10px;
    padding: 1rem;
    max-width: 400px;
    text-align: left;
`;

const Texts = styled.div`
    flex: 1;

    a {
        font-size: 2rem;
        color: #000;
        text-decoration-line: none;
        font-weight: 600;
    }

    p {
        font-size: 1.3rem;
    }
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 7rem;
`;

const Image = styled.img`
    width: 100%;
`;
