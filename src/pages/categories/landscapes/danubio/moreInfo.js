import styled from "@emotion/styled/macro";
import MoreInfoPageComponents from "../../../../components/moreInfoPageComponents";
import { CarouselComponent } from "../../../../components/carousel";
import bg from "../../../../assets/images/danubioMoreInfoBg.png";
import img1 from "../../../../assets/images/danubioMoreInfo1.png";
import img2 from "../../../../assets/images/danubioMoreInfo2.png";

export default function DanubioMoreInfo() {
    return (
        <Container>
            <CarouselComponent img1={bg} img2={bg} img3={bg} />
            <SubContainer>
                <MoreInfoPageComponents
                    img1={img1}
                    img2={img2}
                    title="Acerca de la Reserva natural el Danubio"
                    text1="Está ubicada sobre la cordillera Oriental, en la Cuenca del Rio Bodoquero. Cuenta con tres senderos ecológicos que permite al turista disfrutar de un momento de placer con los abundantes y exóticos recursos de flora y fauna. La Lista de atractivos que se pueden experimentar en la reserva es bastante larga, Los turistas que quieran practicar Senderismo lo pueden hacer en las cascadas Los helechos o Murui Muinane o enamorarse de la imponente cascada Mo Buinaima, que tiene una altura aproximada de 20 metros."
                    text2="Las personas mas tranquilas pueden hacer avistamiento de aves en el mirador, el milagro o entrar a La Cueva de la Boa. Si prefieren algo distinto pueden practicar avistamiento de Flora y fauna, bañarse en el rio o hacer el famoso Tubing (recorrer el rio en neumaticos) hasta Morelia y realizar un safari fotografico a lado y lado del rio. 'La Idea es que las familias vengan y alquilen el sitio con todos los servicios, prueben los huevos azules y disfruten la comida tipica de la region como el asado caqueteño o la famosa cachama ahumada, y puedan gozar de las cristalinas aguas del Rio Bodoquero en una forma sana y segura. Hay que desconectarse de la ciudad' recomienda Ivan Salazar."
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
