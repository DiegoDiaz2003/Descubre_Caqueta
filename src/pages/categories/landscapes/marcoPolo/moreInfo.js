import styled from "@emotion/styled/macro";
import MoreInfoPageComponents from "../../../../components/moreInfoPageComponents";
import { CarouselComponent } from "../../../../components/carousel";
import bg from "../../../../assets/images/marcoPoloMoreInfoBg.png";
import img1 from "../../../../assets/images/marcoPoloMoreInfo1.png";
import img2 from "../../../../assets/images/marcoPoloMoreInfo2.png";

export default function MarcoPoloMoreInfo() {
    return (
        <Container>
            <CarouselComponent img1={bg} img2={bg} img3={bg} />
            <SubContainer>
                <MoreInfoPageComponents
                    img1={img1}
                    img2={img2}
                    title="Navega en el Ferry Marcopolo"
                    text1="Ferry Marcopolo es una experiencia de naturaleza única inolvidable en la que se realiza senderismo fluvial interpretativo, donde los visitantes viven la emoción fascinante de navegar las aguas del rio Orteguaza a bordo del Ferry Marcopolo, acompañados por un guión con un alto contenido de sensibilidad ambiental e histórico en la voz armoniosa del capitán Marcopolo."
                    text2="Ferry Marcopolo es más que un simple recorrido, es una aventura que despierta los sentidos y conecta a los visitantes con la esencia del río Orteguaza. En este viaje, la navegación se combina con un senderismo fluvial interpretativo que invita a explorar la biodiversidad y la riqueza cultural de la región. A bordo del Ferry Marcopolo, los pasajeros se sumergen en un relato lleno de historias fascinantes, contadas por el capitán Marcopolo, cuya voz profunda y llena de sabiduría guía a los viajeros a través de un paisaje impresionante. Con un fuerte compromiso con la conservación ambiental y el respeto por la historia local, esta experiencia se convierte en una vivencia que perdura en la memoria."
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
