import InfoPageComponents from "../../../../components/infoPageComponents";
import bg from "../../../../assets/images/marcoPoloBg.png";
import img1 from "../../../../assets/images/marcoPolo1.png";
import img2 from "../../../../assets/images/marcoPolo2.png";
import img3 from "../../../../assets/images/marcoPolo3.png";
import styled from "@emotion/styled/macro";
import { CarouselComponent } from "../../../../components/carousel";

export default function MarcoPoloInfo() {
    return (
        <Container>
            <CarouselComponent img1={bg} img2={bg} img3={bg} />
            <SubContainer>
                <InfoPageComponents
                    lat={1.534434833276442}
                    lng={-75.52513411766694}
                    title="Ferry MarcoPolo Crucero Fluvial Ecológico"
                    img1={img1}
                    img2={img2}
                    img3={img3}
                    text="¡Bienvenido a bordo del Ferry MarcoPolo, tu puerta de entrada a una experiencia fluvial ecológica inolvidable! Navega por las majestuosas aguas de Caquetá y descubre la belleza de sus paisajes desde una perspectiva única.
Te invitamos a disfrutar de un viaje lleno de aventuras, donde la naturaleza se despliega a tu alrededor. Observa la rica biodiversidad de la región, relájate en nuestras cómodas instalaciones y déjate llevar por el suave vaivén del río.!"
                    url="/more_info/marco_polo"
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
