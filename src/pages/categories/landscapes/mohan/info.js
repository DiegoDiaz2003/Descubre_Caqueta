import InfoPageComponents from "../../../../components/infoPageComponents";
import bg from "../../../../assets/images/mohanInfoBg.png";
import img1 from "../../../../assets/images/mohanInfo1.png";
import img2 from "../../../../assets/images/mohanInfo2.png";
import img3 from "../../../../assets/images/mohanInfo3.png";
import styled from "@emotion/styled/macro";
import { CarouselComponent } from "../../../../components/carousel";

export default function MohanInfo() {
    return (
        <Container>
            <CarouselComponent img1={bg} img2={bg} img3={bg} />
            <SubContainer>
                <InfoPageComponents
                    lat={1.9258026604744793}
                    lng={-75.13649228997919}
                    title="Cascada el Mohan"
                    img1={img1}
                    img2={img2}
                    img3={img3}
                    text="Bienvenido a la majestuosa Cascada El Mohán, un tesoro natural en Puerto Rico, Caquetá! Aquí, la fuerza del agua se despliega en un espectáculo impresionante que te dejará maravillado.
Te invitamos a disfrutar de la belleza de este lugar, donde el sonido del agua cayendo y el verdor de la vegetación crean un ambiente de paz y serenidad. Pasea por los senderos que rodean la cascada, respira el aire fresco y siente la energía revitalizante de la naturaleza.
La Cascada El Mohán es el destino perfecto para los amantes de la aventura y la fotografía. ¡Ven y vive una experiencia inolvidable en este rincón mágico de Caquetá! Estamos encantados de tenerte aquí y esperamos que disfrutes de la belleza y tranquilidad que solo este lugar puede ofrecer."
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
