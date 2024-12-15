import styled from "@emotion/styled/macro";
import * as color from "../../theme";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Link } from "react-router-dom";

export default function InfoPageComponents({
    lat,
    lng,
    title,
    img1,
    img2,
    img3,
    text,
    url,
}) {
    const containerStyle = {
        width: "100%",
        height: "400px",
    };

    const center = {
        lat: lat,
        lng: lng,
    };

    return (
        <Container>
            <h1>{title}</h1>

            <ImagesContainer>
                <Image src={img1} alt="Gallery item" />
                <Image src={img2} alt="Gallery item" />
                <Image src={img3} alt="Gallery item" />
            </ImagesContainer>
            <TextsContainer>
                <p>{text}</p>

                <Button to={url}>Conocer mas</Button>
            </TextsContainer>

            <MapContainer>
                <LoadScript googleMapsApiKey="AIzaSyBbIYLJJJ6Rjmn6PV9x7_4-yi5A6FJhHk4">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={13}
                    >
                        <Marker position={center} />
                    </GoogleMap>
                </LoadScript>
            </MapContainer>
        </Container>
    );
}

const Container = styled.header`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    gap: 2rem;
    padding: 2rem;
    width: 100%;
    max-width: 1700px;
`;

const ImagesContainer = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, minmax(250px, 300px));
    grid-template-rows: repeat(1, 500px);
    gap: 1rem;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const TextsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        max-width: 1000px;
    }
`;

const Button = styled(Link)`
    align-self: center;
    border-radius: 1rem;
    border: none;
    font-size: 1.2rem;
    padding: 0.2rem 1.5rem;
    font-weight: bold;
    background: ${color.buttonColor};
    color: #fff;
    text-decoration-line: none;
`;

const MapContainer = styled.div`
    width: 100%;
    height: 400px;
`;
