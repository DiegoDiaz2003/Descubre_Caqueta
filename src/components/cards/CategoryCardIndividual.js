import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";
import * as color from "../../theme"
import { bodygeneral } from "../../App";

export default function CategoryCardIndividual({ title, text, image,background,url, body }) {
    bodygeneral.setBody(body);
    return (
        <Card backgroundColor={background}>
            <Texts>
                <h2>{title}</h2>
                <p>{text}</p>
                <Button to={url}>¡Pille!</Button>
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
    max-width: 500px;
    text-align: left;
`;

const Texts = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    h2 {
        font-size: 2rem;
        color: #000;
        font-weight: 600;
    }

    p {
        font-size: 1.3rem;
    }
`;

const Button = styled(Link)`
    align-self: center;
    border-radius: 1rem;
    border:none;
    font-size: 1.2rem;
    padding: 0.2rem 1.5rem;
    font-weight: bold;
    background: ${color.buttonColor};
    text-decoration-line: none;
    color: #fff;
`

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10rem;
`;

const Image = styled.img`
    width: 10rem;
    height: 10rem;
    border-radius: 100%;
`;