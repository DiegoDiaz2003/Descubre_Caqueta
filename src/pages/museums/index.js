import styled from "@emotion/styled/macro";
import CategoryCardIndividual from "../../components/cards/CategoryCardIndividual";
import Bg from "../../assets/images/museumBg.png";
import Image1 from "../../assets/images/museum1.png";
import Image2 from "../../assets/images/museum2.png";
import Image3 from "../../assets/images/museum3.png";
import Image4 from "../../assets/images/museum4.png";
import TextsCategoryIndividual from "../../components/textsCategoryIndividual";
import { CarouselComponent } from "../../components/carousel";
import * as color from "../../theme";

export default function MuseumsPage() {
    return (
        <Container>
            <CarouselComponent img1={Bg} img2={Bg} img3={Bg}/>
            <TextsCategoryIndividual
                title="Esculturas y museo "
                text="El Museo Caquetá es un espacio dedicado a la memoria histórica del departamento de Caquetá, en Colombia."
            />
            <CardsContainer>
                <CategoryCardIndividual
                    title="Museo Caqueta"
                    text="En homenaje a los mestizos que  colonizaron el territorio  caqueteño. "
                    image={Image1}
                    background={color.blueColor}
                    url="/info/museo_caqueta"
                />
                <CategoryCardIndividual
                    title="la Diosa del Chaira."
                    text="En honor a la Diosa del Chairá,  figura de la mitología indígena  caqueteña protagonista de la  leyenda huitoto"
                    image={Image2}
                    background={color.yellowColor}
                    url="/info/chaira"
                />{" "}
                <CategoryCardIndividual
                    title="Colonos Florencia "
                    text="En homenaje a los mestizos que  colonizaron el territorio  caqueteño. "
                    image={Image3}
                    background={color.yellowColor}
                    url="/info/colonos"
                />{" "}
                <CategoryCardIndividual
                    title="Fundador de Belén"
                    text="En Homenaje al fundador de Belén"
                    image={Image4}
                    background={color.blueColor}
                    url="/info/belen"
                />
            </CardsContainer>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    padding: 0 0 2rem 0;
    width: 100%;
    max-width: 1800px;
`;

const CardsContainer = styled.section`
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(2, minmax(200px, 500px));
    gap: 1rem;
`;
