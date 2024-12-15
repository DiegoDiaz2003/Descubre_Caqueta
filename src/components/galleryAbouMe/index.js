import styled from "@emotion/styled";
import image1 from "../../assets/images/gallery1.png";
import image2 from "../../assets/images/gallery2.png";
import image3 from "../../assets/images/gallery3.png";
import image4 from "../../assets/images/gallery4.png";
import image5 from "../../assets/images/gallery5.png";
import image6 from "../../assets/images/gallery6.png";
import image7 from "../../assets/images/gallery7.png";
import image8 from "../../assets/images/gallery8.png";


export default function GalleryAboutme() {
    return (
        <Container>

            <h1>¡Nuestros hermosos paisajes!</h1>

            <ImagesContainer>
                <Image src={image1} alt="Gallery item" />
                <Image src={image2} alt="Gallery item" />
                <Image src={image3} alt="Gallery item" />
                <Image src={image4} alt="Gallery item" />
                <Image src={image5} alt="Gallery item" />
                <Image src={image6} alt="Gallery item" />
                <Image src={image7} alt="Gallery item" />
                <Image src={image8} alt="Gallery item" />
            </ImagesContainer>
        </Container>
    );
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    justify-content: center;
    padding: 2rem;
    width: 100%;
    max-width: 1700px;
`;

const ImagesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(250px, 1fr)); 
    grid-template-rows: repeat(2, 250px);
    gap: 1rem; 
`;

const Image = styled.img`
    width: 100%; 
    height: 100%;
    object-fit: cover; 
`;
