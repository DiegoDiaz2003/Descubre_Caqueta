import Carousel from "react-bootstrap/Carousel";
import styled from "@emotion/styled/macro";

export function CarouselComponent({img1,img2,img3}) {
    return (
        <Container>
            <Carousel.Item>
                <Image src={img1} alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <Image src={img2} alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <Image src={img3} alt="" />
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
