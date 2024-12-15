import styled from "@emotion/styled";
import image from "../../assets/images/aboutMe.png";
import * as color from "../../theme";

function IndividualContent({ number, title, text }) {
    return (
        <TextsContainer>
            <TitleContainer>
                <span>{number}</span>
                <h2>{title}</h2>
            </TitleContainer>
            <p>{text}</p>
        </TextsContainer>
    );
}

export default function AboutMeContent() {
    return (
        <Container>
            <ImageContainer>
                <Image src={image} alt="" />
            </ImageContainer>

            <ContentContainer>
                <IndividualContent
                    number={1}
                    title="Lugares que visitar"
                    text="¡Disfruta de algunas de las maravillas del Caquetá!, sumergete en la belleza de los paisajes y de la deliciosa comida que ofrecen los restaurantes de este departamento 
                    ¡Descubre los tesoros de Medellín! Sumérgete en la historia y la cultura en el Museo de Antioquia. Maravíllate con la exuberante belleza del Jardín Botánico. Admira la icónica estatua de Pedro Justo Berrío en el vibrante Parque de Berrío. Y no te pierdas las vistas panorámicas de la ciudad desde el imponente Cerro El Volador. ¡Medellín te espera con experiencias inolvidables! ¡Visítanos ahora!"
                />

                <IndividualContent
                    number={2}
                    title="Nuevas experiencias por vivir"
                    text="¡Prepárate para nuevas emociones en Medellín! Explora el innovador Parque Explora y déjate sorprender por su impresionante acuario y planetario. Sumérgete en la cultura local en el colorido Mercado de San Alejo, donde encontrarás artesanías y gastronomía tradicional. Disfruta de la adrenalina en el Parque Arví, con senderos naturales y actividades al aire libre. Y para una experiencia única, no te pierdas el famoso tour de la Comuna 13, donde descubrirás la transformación de un antiguo barrio en un vibrante centro artístico. ¡Medellín te espera con nuevas aventuras por vivir! ¡No te lo pierdas!
"
                />
            </ContentContainer>
        </Container>
    );
}

const Container = styled.section`
    display: flex;
    gap: 2rem;
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
`;

const Image = styled.img`
    width: 100%;
`;

const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
`

const TextsContainer = styled.div`
    max-width: 700px;
    text-align: center;
`;

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    span {
        font-size: 1.5rem;
        background: ${color.greenTwoColor};
        padding: 0 0.8rem;
        font-weight: bold;
        border-radius: 100%;
    }
`;
