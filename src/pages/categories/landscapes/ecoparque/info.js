import InfoPageComponents from "../../../../components/infoPageComponents";
import bg from "../../../../assets/images/ecoparqueInfoBg.png";
import img1 from "../../../../assets/images/ecoparque1.png";
import img2 from "../../../../assets/images/ecoparque2.png";
import img3 from "../../../../assets/images/ecoparque3.png";
import styled from "@emotion/styled/macro";
import { CarouselComponent } from "../../../../components/carousel";

export default function EcoparqueInfo() {
    return (
        <Container>
            <CarouselComponent img1={bg} img2={bg} img3={bg} />
            <SubContainer>
                <InfoPageComponents
                    lat={1.6551039033523989}
                    lng={-75.60681864362073}
                    title="Ecoparque la calera"
                    img1={img1}
                    img2={img2}
                    img3={img3}
                    text="Bienvenido al Ecoparque La Calera, un oasis de naturaleza y aventura en el corazón de Caquetá! Aquí, la biodiversidad y la sostenibilidad se unen para ofrecerte una experiencia única en contacto con el medio ambiente.
Te invitamos a explorar nuestros senderos rodeados de exuberante vegetación, donde podrás disfrutar de la fauna local y maravillarte con la belleza de los paisajes. Participa en actividades ecoturísticas, talleres educativos y eventos que te conectarán aún más con la naturaleza.
En el Ecoparque La Calera, cada rincón es una oportunidad para aprender y disfrutar. ¡Estamos encantados de recibirte y esperamos que vivas momentos inolvidables en este maravilloso espacio natural!"
                    button={false}
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
