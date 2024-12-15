import styled from "@emotion/styled/macro";

export default function MoreInfoPageComponents({
    title,
    img1,
    img2,
    text1,
    text2,
}) {
    return (
        <Container>
            <h1>{title}</h1>
            <p>{text1}</p>

            <TextsContainer>
                <ContentContainer>
                    <p>{text2}</p>
                </ContentContainer>
                <ImageContainer>
                    <Image src={img1} alt="" />
                </ImageContainer>
            </TextsContainer>

            <FooterImage src={img2} alt="" />
        </Container>
    );
}

const Container = styled.header`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    width: 100%;
    max-width: 1000px;
`;

const TextsContainer = styled.div`
    display: flex;
    gap: 2rem;
    flex-wrap: wrap; /* Asegura que se ajusta en pantallas pequeñas */
`;

const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 40%; 
`;

const Image = styled.img`
    width: 100%;
`;

const ContentContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;
    max-width: 60%; 
    padding: 1rem;
`;

const FooterImage = styled.img`
    max-height: 300px;
    object-fit: cover;
`;
