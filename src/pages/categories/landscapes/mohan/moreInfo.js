import styled from "@emotion/styled/macro";
import MoreInfoPageComponents from "../../../../components/moreInfoPageComponents";
import { CarouselComponent } from "../../../../components/carousel";
import bg from "../../../../assets/images/mohanMoreInfoBg.png";
import img1 from "../../../../assets/images/mohanMoreInfo1.png";
import img2 from "../../../../assets/images/mohanMoreInfo2.png";

export default function MohanMoreInfo() {
    return (
        <Container>
            <CarouselComponent img1={bg} img2={bg} img3={bg} />
            <SubContainer>
                <MoreInfoPageComponents
                    img1={img1}
                    img2={img2}
                    title="Explora la cascada el mohán"
                    text1="La cascada el Mohán es una de las más hermosas de Vista Hermosa, tiene aproximadamente 120 metros de altura. Acompañado de un guía local disfrutarás de sendero natural alrededor de formaciones montañosas e imponentes rocas. En el sendero para llegar a este sitio se pueden observar variedad de mariposas, aves y primates."
                    text2="El Jardín Botánico es hogar de una impresionante colección de plantas, desde orquídeas y bromelias hasta palmas y cactus. Su área de Orquideorama, famosa por su diseño arquitectónico, resguarda especies endémicas de Colombia y crea un espectáculo natural de formas y colores que deleita a sus visitantes. Cada rincón del jardín revela un ecosistema en miniatura, lleno de vida y de diversidad botánica que fascina a amantes de la naturaleza y curiosos por igual."
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
