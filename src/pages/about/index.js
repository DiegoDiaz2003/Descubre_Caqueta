import styled from "@emotion/styled/macro";
import AboutMeContent from "../../components/aboutMeContent";
import GalleryAboutme from "../../components/galleryAbouMe";
import AboutMeHeader from "../../components/aboutMeHeader";

export default function AboutPage() {
    return (
        <Container>
            <AboutMeHeader />
            <div>
                <h1>Te acompañamos en cada parte de tu viaje</h1>
                <AboutMeContent />
            </div>
            <GalleryAboutme />
        </Container>
    );
}

const Container = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    width: 100%;
    max-width: 1000px;

    div h1 {
        text-align: center;
        margin-bottom: 3rem;
    }
`;
