import styled from "@emotion/styled/macro";
import CategoryCardIndividual from "../../components/cards/CategoryCardIndividual";
import Bg from "../../assets/images/landscapeBg1.png";
import Image1 from "../../assets/images/landscape1.png";
import Image2 from "../../assets/images/landscape2.png";
import Image3 from "../../assets/images/landscape3.png";
import Image4 from "../../assets/images/landscape4.png";
import TextsCategoryIndividual from "../../components/textsCategoryIndividual";
import { CarouselComponent } from "../../components/carousel";
import * as color from "../../theme";

export function LandscapesPage() {
    return (
        <Container>
            <CarouselComponent img1={Bg} img2={Bg} img3={Bg} />
            <TextsCategoryIndividual
                title="Paisajes"
                text="Caquetá es un verdadero paraíso natural, donde sus exuberantes selvas y majestuosas montañas se entrelazan. Sus ríos cristalinos y cascadas ocultas crean un paisaje cautivador, perfecto para los amantes de la aventura. Los atardeceres sobre las llanuras pintan el cielo de colores vibrantes, ofreciendo un espectáculo mágico. En Caquetá, la naturaleza se despliega en todo su esplendor, invitando a explorar y disfrutar de su rica biodiversidad. ¡Un destino que enamora a cada paso!"
            />
            <CardsContainer>
                <CategoryCardIndividual
                    title="Reserva natural el Danubio"
                    text="Esta reserva, de más de 100 hectáreas de bosque altoandino, cuenta con distintas actividades para hacer en Florencia para que tengas un día espectacular. "
                    image={Image1}
                    background={color.blueColor}
                    url="/info/danubio"
                />
                <CategoryCardIndividual
                    title="Ecoparque la calera"
                    text="El Ecoparque La Calera es uno de los lugares turísticos más increíbles de Florencia, Caquetá, donde puedes disfrutar de la naturaleza y diversas actividades al aire libre."
                    image={Image2}
                    background={color.yellowColor}
                    url="/info/ecoparque"
                />{" "}
                <CategoryCardIndividual
                    title="Cascada el Mohan"
                    text="En Puerto Rico, descubrirás una de las cascadas más únicas de la región. La riqueza hídrica y paisajística del lugar resalta la belleza natural que ofrece el majestuoso Río Guayas."
                    image={Image3}
                    background={color.yellowColor}
                    url="/info/mohan"
                />{" "}
                <CategoryCardIndividual
                    title="Ferry MarcoPolo"
                    text="Ferry Marcopolo ofrece una experiencia única e inolvidable en la naturaleza, donde los visitantes disfrutan de la emocionante aventura de navegar por las aguas del río Orteguaza."
                    image={Image4}
                    background={color.blueColor}
                    url="/info/marco_polo"
                />
            </CardsContainer>
        </Container>
    );
}

export function LandscapesPageHospedaje() {
    return (
        <Container>
            <CarouselComponent img1={Image1} img2={Image2} img3={Image3} />
            <TextsCategoryIndividual
                title="Hospedajes"
                text="Caquetá te espera con su belleza natural y cultura vibrante. Ofrece una variedad de hospedajes, desde cabañas en la selva hasta hoteles cómodos en Florencia. Disfruta de la calidez de su gente y vive una experiencia única en este rincón de Colombia. ¡Tu aventura comienza aquí!"
            />
            <CardsContainer>
                <CategoryCardIndividual
                    title="Hotel Caquetá Real HSC"
                    text="Hotel Caquetá Real HSC dispone de piscina al aire libre, centro de fitness, salón de uso común y terraza en Florencia. Este alojamiento ofrece restaurante, servicio de habitaciones y recepciones las 24 horas. "
                    image={Image1}
                    background={color.blueColor}
                    url="/info/landscapes"
                />
                <CategoryCardIndividual
                    title="Estadero Bello Horizonte"
                    text="Centro Recreacional con un enorme terreno dedicado al entretenimiento familiar, aquí encontrarán piscinas naturales, Hospedaje de lujo, canchas de fútbol, restaurante, zonas al aire libre, Camping y más."
                    image={Image2}
                    background={color.yellowColor}
                    url="/landscapes"
                />{" "}
                <CategoryCardIndividual
                    title="Hotel Andinos Plaza Florencia"
                    text="Hotel Andinos Plaza, cuenta con un bar y instalaciones para deportes acuáticos. Este hotel de 4 estrellas ofrece terraza y tiene habitaciones con aire acondicionado, wifi gratis y baño privado."
                    image={Image3}
                    background={color.yellowColor}
                    url="/landscapes"
                />{" "}
                <CategoryCardIndividual
                    title="La Calera Amazónica"
                    text="El sitio se trata de una construcción campestre, ubicada bajo un bello panorama natural frente al rio Hacha, con un espectacular mirador rodeado de aire puro."
                    image={Image4}
                    background={color.blueColor}
                    url="/landscapes"
                />
            </CardsContainer>
        </Container>
    );
}
export function LandscapesPageEsculturas() {
    return (
        <Container>
            <CarouselComponent img1={Image1} img2={Image2} img3={Image3} />
            <TextsCategoryIndividual
                title="Esculturas, museo y jardines"
                text={
                    "Caquetá, un joya cultural de Colombia, te invita a descubrir sus museos, donde la historia y la tradición se entrelazan. Cada museo refleja la rica herencia indígena y la biodiversidad de la región. Al visitarlos, experimentarás la pasión de su gente y te sumergirás en la cultura caqueteña. ¡Explora y déjate inspirar por esta fascinante región!"
                }
            />
            <CardsContainer>
                <CategoryCardIndividual
                    title="Museo Caqueta"
                    text={
                        "El Museo Caquetá es un espacio dedicado a la memoria histórica del departamento de Caquetá, en Colombia."
                    }
                    image={Image1}
                    background={color.blueColor}
                    url="/info/landscapes"
                />
                <CategoryCardIndividual
                    title="Colonos Florencia "
                    text="En homenaje a los mestizos que  colonizaron el territorio  caqueteño."
                    image={Image2}
                    background={color.yellowColor}
                    url="/landscapes"
                />{" "}
                <CategoryCardIndividual
                    title="Resguardos de paz"
                    text="El Resguardos de Paz Hotel Campestre, un refugio de serenidad en las afueras del municipio de El Paujil."
                    background={color.yellowColor}
                    url="/landscapes"
                />{" "}
                <CategoryCardIndividual
                    title="la Diosa del Chaira."
                    text="En honor a la Diosa del Chairá,  figura de la mitología indígena  caqueteña protagonista de la  leyenda huitoto."
                    image={Image4}
                    background={color.blueColor}
                    url="/landscapes"
                />
            </CardsContainer>
        </Container>
    );
}
export function LandscapesPageRestaurantes() {
    return (
        <Container>
            <CarouselComponent img1={Image1} img2={Image2} img3={Image3} />
            <TextsCategoryIndividual
                title="Restaurantes"
                text="Caquetá es un paraíso gastronómico que refleja su rica cultura. Sus restaurantes ofrecen sabores auténticos, desde el sancocho hasta la bandeja paisa, preparados con ingredientes frescos y locales. Cada bocado es una celebración de la calidez de su gente. ¡Descubre la deliciosa experiencia culinaria de Caquetá y déjate sorprender!"
            />
            <CardsContainer>
                <CategoryCardIndividual
                    title="Restaurante Rio Gourmet"
                    text="En él podrán disfrutar de un magnífico menú con la mejor atención y un ambiente único que se quedará por siempre en la memoria de todos los asistentes."
                    image={Image1}
                    background={color.blueColor}
                    url="/info/landscapes"
                />
                <CategoryCardIndividual
                    title="Estadero Bello HorizonteCroissant Panadería"
                    text="¡Croissant: Sabores que te acompañan todo el día!"
                    image={Image2}
                    background={color.yellowColor}
                    url="/landscapes"
                />{" "}
                <CategoryCardIndividual
                    title="San Juan Smoke House"
                    text="Haga realidad sus sueños sirviendo platos favoritos de barbacoa sureña con un Puerto Rico local."
                    image={Image3}
                    background={color.yellowColor}
                    url="/landscapes"
                />{" "}
                <CategoryCardIndividual
                    title="Rusticos"
                    text="Tiene asientos al aire libre, ofrece buenos cócteles, ofrece platos vegetarianos."
                    image={Image4}
                    background={color.blueColor}
                    url="/landscapes"
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
