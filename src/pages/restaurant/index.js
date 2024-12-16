import styled from "@emotion/styled/macro";
import CategoryCardIndividual from "../../components/cards/CategoryCardIndividual";
import Bg from "../../assets/images/restaurantBg.png";
import Image1 from "../../assets/images/restaurant1.png";
import Image2 from "../../assets/images/restaurant2.png";
import Image3 from "../../assets/images/restaurant3.png";
import Image4 from "../../assets/images/restaurant4.png";
import TextsCategoryIndividual from "../../components/textsCategoryIndividual";
import { CarouselComponent } from "../../components/carousel";
import * as color from "../../theme";

export default function RestaurantPage() {
    return (
        <Container>
            <CarouselComponent img1={Bg} img2={Bg} img3={Bg} />
            <TextsCategoryIndividual
                title="Restaurantes"
                text="Caquetá es un paraíso gastronómico que refleja su rica cultura. Sus restaurantes ofrecen sabores auténticos, desde el sancocho hasta la bandeja paisa, preparados con ingredientes frescos y locales. Cada bocado es una celebración de la calidez de su gente. ¡Descubre la deliciosa experiencia culinaria de Caquetá y déjate sorprender!"
            />
            <CardsContainer>
                <CategoryCardIndividual
                    title="Restaurante Rio Gourmet
"
                    text="En él podrán disfrutar de un magnífico menú con la mejor atención y un ambiente único que se quedará por siempre en la memoria de todos los asistentes. "
                    image={Image1}
                    background={color.blueColor}
                    url="/info/rio_gourmet"
                />
                <CategoryCardIndividual
                    title="Croissant Panadería
"
                    text="¡Croissant: Sabores que te acompañan todo el día! "
                    image={Image2}
                    background={color.yellowColor}
                    url="/info/croissant"
                />{" "}
                <CategoryCardIndividual
                    title="San Juan Smoke House
"
                    text="Haga realidad sus sueños sirviendo platos favoritos de barbacoa sureña con un Puerto Rico local."
                    image={Image3}
                    background={color.yellowColor}
                    url="/info/smoke_house"
                />{" "}
                <CategoryCardIndividual
                    title="Rusticos"
                    text="Tiene asientos al aire libre, ofrece buenos cócteles, ofrece platos vegetarianos"
                    image={Image4}
                    background={color.blueColor}
                    url="/info/rusticos"
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
