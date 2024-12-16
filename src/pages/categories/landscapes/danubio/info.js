import InfoPageComponents from "../../../../components/infoPageComponents";
import bg from "../../../../assets/images/danubioInfoBg.png";
import img1 from "../../../../assets/images/danubioInfo1.png";
import img2 from "../../../../assets/images/danubioInfo2.png";
import img3 from "../../../../assets/images/danubioInfo3.png";
import styled from "@emotion/styled/macro";
import { CarouselComponent } from "../../../../components/carousel";

export default function DanubioInfo() {
    return (
        <Container>
            <CarouselComponent img1={bg} img2={bg} img3={bg} />
            <SubContainer>
                <InfoPageComponents
                    lat={1.5105471637522143}
                    lng={-75.7436238954037}
                    title="Reserva natural el Danubio"
                    img1={img1}
                    img2={img2}
                    img3={img3}
                    text="¡Bienvenido a la Reserva Natural El Danubio, un verdadero paraíso en el corazón de Caquetá! Aquí, la naturaleza se despliega en todo su esplendor, ofreciéndote un refugio de paz y biodiversidad.
Te invitamos a explorar nuestros senderos rodeados de exuberante flora y fauna, donde cada paso te acercará más a la esencia de este ecosistema único. Disfruta del canto de las aves, el murmullo de los ríos y la belleza de paisajes que te dejarán sin aliento.
En la Reserva Natural El Danubio, cada rincón cuenta una historia y cada experiencia es una oportunidad para conectar con la naturaleza. ¡Estamos encantados de tenerte aquí y esperamos que disfrutes de todo lo que este maravilloso lugar tiene para ofrecer!"
                    url="/more_info/danubio"
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
