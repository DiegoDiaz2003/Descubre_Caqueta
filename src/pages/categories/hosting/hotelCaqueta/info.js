import InfoPageComponents from "../../../../components/infoPageComponents";
import bg from "../../../../assets/images/hotelCaquetaBg.png";
import img1 from "../../../../assets/images/hotelCaqueta1.png";
import img2 from "../../../../assets/images/hotelCaqueta2.png";
import img3 from "../../../../assets/images/hotelCaqueta3.png";
import styled from "@emotion/styled/macro";
import { CarouselComponent } from "../../../../components/carousel";

export default function HotelCaquetaInfo() {
    return (
        <Container>
            <CarouselComponent img1={bg} img2={bg} img3={bg} />
            <SubContainer>
                <InfoPageComponents
                    lat={1.6184276557870843}
                    lng={-75.61243195246846}
                    title="Hotel Caquetá Real HSC"
                    img1={img1}
                    img2={img2}
                    img3={img3}
                    text="¡¡Bienvenido al Hotel Caquetá Real HSC, tu refugio de confort y calidez en el corazón de Caquetá! Nos complace recibirte en un espacio diseñado para brindarte la mejor experiencia durante tu estancia.
Disfruta de nuestras cómodas habitaciones, equipadas con todo lo necesario para que te sientas como en casa. Nuestro amable personal está aquí para atenderte y asegurarse de que cada momento sea especial.!"
                    url="/more_info/hotel_caqueta"
                />
            </SubContainer>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    width: 100%;
    max-width: 1000px;
`;
