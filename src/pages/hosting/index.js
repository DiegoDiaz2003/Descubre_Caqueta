import styled from "@emotion/styled/macro";
import CategoryCardIndividual from "../../components/cards/CategoryCardIndividual";
import Bg from "../../assets/images/hostingBg.png";
import Image1 from "../../assets/images/hosting1.png";
import Image2 from "../../assets/images/hosting2.png";
import Image3 from "../../assets/images/hosting3.png";
import Image4 from "../../assets/images/hosting4.png";
import TextsCategoryIndividual from "../../components/textsCategoryIndividual";
import { CarouselComponent } from "../../components/carousel";
import * as color from "../../theme";

export default function HostingPage() {
    return (
        <Container>
            <CarouselComponent img1={Bg} img2={Bg} img3={Bg} />
            <TextsCategoryIndividual
                title="Hospedaje"
                text="Caquetá te espera con su belleza natural y cultura vibrante. Ofrece una variedad de hospedajes, desde cabañas en la selva hasta hoteles cómodos en Florencia. Disfruta de la calidez de su gente y vive una experiencia única en este rincón de Colombia. ¡Tu aventura comienza aquí!"
            />
            <CardsContainer>
                <CategoryCardIndividual
                    title="Hotel Caquetá Real HSC"
                    text="Hotel Caquetá Real HSC dispone de piscina al aire libre, centro de fitness, salón de uso común y terraza en Florencia. Este alojamiento ofrece restaurante, servicio de habitaciones y recepciones las 24 horas. "
                    image={Image1}
                    background={color.blueColor}
                    url="/info/hotel_caqueta"
                />
                <CategoryCardIndividual
                    title="Estadero Bello Horizonte"
                    text="Centro Recreacional con un enorme terreno dedicado al entretenimiento familiar, aquí encontrarán piscinas naturales, Hospedaje de lujo, canchas de fútbol, restaurante, zonas al aire libre, Camping y más."
                    image={Image2}
                    background={color.yellowColor}
                    url="/info/bello_horizonte  "
                />{" "}
                <CategoryCardIndividual
                    title="Hotel Andinos Plaza Florencia"
                    text="Hotel Andinos Plaza, cuenta con un bar y instalaciones para deportes acuáticos. Este hotel de 4 estrellas ofrece terraza y tiene habitaciones con aire acondicionado, wifi gratis y baño privado."
                    image={Image3}
                    background={color.yellowColor}
                    url="/info/hotel_andinos"
                />{" "}
                <CategoryCardIndividual
                    title="La Calera Amazónica"
                    text="El sitio se trata de una construcción campestre, ubicada bajo un bello panorama natural frente al rio Hacha, con un espectacular mirador rodeado de aire puro."
                    image={Image4}
                    background={color.blueColor}
                    url="/info/marco_polo"
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
    max-width: 2000px;
`;

const CardsContainer = styled.section`
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(2, minmax(200px, 500px));
    gap: 1rem;
`;
