import styled from "@emotion/styled/macro";
import CategoryCard from "../../components/cards/CategoryCard";
import DiscoverCaqueta from "../../components/cards/DiscoverCaqueta";
import Image1 from "../../assets/images/city.png";
import Image2 from "../../assets/images/music.png";
import Image3 from "../../assets/images/art.png";
import Image4 from "../../assets/images/things.png";
import * as color from "../../theme";

import Logo from "../../assets/images/logo.png";
import ImageBackground from "../../assets/images/indexBg.png";

export default function IndexPage() {
    return (
        <Container>
            <SubContainer>
                <DiscoverCaqueta />
                <CategoryContainer>
                    <TitleContainer>
                        <Title> Categorias </Title>
                    </TitleContainer>
                    <CardsContainer>
                        <CategoryCard
                            title="Paisajes"
                            text="Explora los paisajes más impresionantes."
                            image={Image1}
                            background={color.blueColor}
                            url="/landscapes"
                        />
                        <CategoryCard
                            title="Hospedaje"
                            text="Descubre los Hospedajes mas cool."
                            image={Image2}
                            background={color.yellowColor}
                            url="/hosting"
                        />
                        <CategoryCard
                            title="Museos"
                            text="Descubra la historia que ofrece el Caqueta."
                            image={Image3}
                            background={color.yellowColor}
                            url="/museums"
                        />
                        <CategoryCard
                            title="Restaurantes"
                            text="Descubre los restaurantes mas llamativos en el Caqueta."
                            image={Image4}
                            background={color.blueColor}
                            url="/restaurants"
                        />
                    </CardsContainer>
                </CategoryContainer>

                <Image src={Logo} />
            </SubContainer>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background: url(${ImageBackground});
    background-size: cover;
    background-position: center bottom;
    width: 100%;
    min-height: 80vh;
`;

const SubContainer = styled.div`
    display: flex;
    gap: 1rem;
    max-width: 2000px;
`;

const CategoryContainer = styled.section`
    text-align: center;
`;

const TitleContainer = styled.div`
    display: inline-block;
    justify-content: center;
    align-items: center;
    background: ${color.greenColor};
    padding: 0 5rem;
    margin-bottom: 1rem;
    border-radius: 10px;
`;

const Title = styled.h1`
    font-size: 2rem;
`;

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
`;

const Image = styled.img`
    position: absolute;
    width: 4rem;
    bottom: 8rem;
    right: 2rem;
`;
