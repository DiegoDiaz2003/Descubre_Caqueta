import styled from "@emotion/styled/macro";
import image from "../../assets/images/aboutMeBg.png"

export default function AboutMeHeader() {
    return (
        <Container>
            <Image src={image} alt="" />
        </Container>
    );
}

const Container = styled.header`
    width: 100%;
    max-height: 500px;
`;

const Image = styled.img`
    width: 100%;
    max-height: 500px;
`