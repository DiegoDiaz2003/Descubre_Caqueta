import Carousel from "react-bootstrap/Carousel";
import Image1 from "../../assets/images/landscapeBg1.png";
import styled from "@emotion/styled/macro";

export function CarouselComponent() {
    return (
        <Container>
            <Carousel.Item>
                <Image src={Image1} alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <Image src={Image1} alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <Image src={Image1} alt="" />
            </Carousel.Item>
        </Container>
    );
}

const Container = styled(Carousel)`
    width: 100%;
    height: 500px;
`;

const Image = styled.img`
    width: 100%;
    height: 500px;
`;
