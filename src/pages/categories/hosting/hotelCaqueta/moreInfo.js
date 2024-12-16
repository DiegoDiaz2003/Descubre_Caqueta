import styled from "@emotion/styled/macro";
import MoreInfoPageComponents from "../../../../components/moreInfoPageComponents";
import { CarouselComponent } from "../../../../components/carousel";
import bg from "../../../../assets/images/hotelCaquetaMoreInfoBg.png";
import img1 from "../../../../assets/images/hotelCaquetaMoreInfo1.png";
import img2 from "../../../../assets/images/hotelCaquetaMoreInfo2.png";

export default function HotelCaquetaMoreInfo() {
    return (
        <Container>
            <CarouselComponent img1={bg} img2={bg} img3={bg} />
            <SubContainer>
                <MoreInfoPageComponents
                    img1={img1}
                    img2={img2}
                    title="Hospedate en el Hotel Caquetá Real"
                    text1="Contamos con diferentes servicios que le permiten a cada uno de nuestros huéspedes disfrutar de una excelente estadía. Gracias al alojamiento de lujo que brindamos y el servicio de calidad de nuestros colaboradores
Nuestros salones son ideales para reuniones de negocios, eventos empresariales y toda clase de eventos sociales, Hacemos parte de tus procesos y te acompañamos a lograr tus objetivos."
                    text2="El Hotel Caquetá Real fue fundado con el objetivo de ofrecer un espacio de alojamiento cómodo y acogedor para visitantes en la región de Caquetá. Su creación surgió de la necesidad de promover el turismo en la zona y brindar una experiencia única a los viajeros que desean explorar la belleza natural y cultural de la región."
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
