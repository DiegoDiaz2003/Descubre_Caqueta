import styled from "@emotion/styled/macro";
import CategoryCardIndividual from "../../components/cards/CategoryCardIndividual";
import Image1 from "../../assets/images/landscape1.png";
import Image2 from "../../assets/images/landscape2.png";
import Image3 from "../../assets/images/landscape3.png";
import Image4 from "../../assets/images/landscape4.png";
import TextsCategoryIndividual from "../../components/textsCategoryIndividual";
import { CarouselComponent } from "../../components/carousel";
import * as color from "../../theme"

export default function LandscapesPage() {
    return (
        <Container>
            <CarouselComponent />
            <TextsCategoryIndividual
                title="Paisajes"
                text="Caquetá es un verdadero paraíso natural, donde sus exuberantes selvas y majestuosas montañas se entrelazan. Sus ríos cristalinos y cascadas ocultas crean un paisaje cautivador, perfecto para los amantes de la aventura. Los atardeceres sobre las llanuras pintan el cielo de colores vibrantes, ofreciendo un espectáculo mágico. En Caquetá, la naturaleza se despliega en todo su esplendor, invitando a explorar y disfrutar de su rica biodiversidad. ¡Un destino que enamora a cada paso!"
            />
            <CardsContainer>
                <CategoryCardIndividual
                    title="Cascada el Mohan"
                    text="En el municipio de Puerto Rico, encontrarás una de las cascadas más únicas de la región. La riqueza hídrica y paisajística generada por el Río Guayas."
                    image={Image1}
                    background={color.blueColor}
                    url="/paisajes"
                />
                <CategoryCardIndividual
                    title="Cascada el Mohan"
                    text="En el municipio de Puerto Rico, encontrarás una de las cascadas más únicas de la región. La riqueza hídrica y paisajística generada por el Río Guayas."
                    image={Image2}
                    background={color.yellowColor}
                    url="/paisajes"
                />{" "}
                <CategoryCardIndividual
                    title="Cascada el Mohan"
                    text="En el municipio de Puerto Rico, encontrarás una de las cascadas más únicas de la región. La riqueza hídrica y paisajística generada por el Río Guayas."
                    image={Image3}
                    background={color.yellowColor}
                    url="/paisajes"
                />{" "}
                <CategoryCardIndividual
                    title="Cascada el Mohan"
                    text="En el municipio de Puerto Rico, encontrarás una de las cascadas más únicas de la región. La riqueza hídrica y paisajística generada por el Río Guayas."
                    image={Image4}
                    background={color.blueColor}
                    url="/paisajes"
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
    grid-template-columns: repeat(2, minmax(200px, 500px));;
    gap: 1rem;
`;
