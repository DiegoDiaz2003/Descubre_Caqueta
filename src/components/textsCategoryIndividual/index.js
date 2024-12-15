import styled from "@emotion/styled";

export default function TextsCategoryIndividual({ title, text }) {
    return (
        <TextContainer>
            <h1>{title}</h1>
            <p>{text}</p>
        </TextContainer>
    );
}

const TextContainer = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    gap: 1rem;
    max-width: 1000px;
`;
