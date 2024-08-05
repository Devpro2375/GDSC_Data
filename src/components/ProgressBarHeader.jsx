/* eslint-disable react/prop-types */
// Import React and styled-components

import styled from 'styled-components';

// Define styled components
const Container = styled.div`
  background-color: #12141f; /* Match background color */
  color: #fff; /* White text */
  height: 300px; /* Set height to 300px */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Arial', sans-serif;
  padding: 1rem; /* Add padding for mobile devices */

  @media (max-width: 768px) {
    height: auto; /* Let height adjust automatically for smaller screens */
    padding: 2rem 1rem; /* Add padding to prevent content from touching edges */
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Adjust font size for smaller screens */
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  color: #bbdefb; /* Light blue color */
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2rem; /* Adjust font size for smaller screens */
  }
`;

const Highlight = styled.span`
  background: linear-gradient(to right, #00f260, #0575e6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Badge = styled.div`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #12141f;
  border: 1px solid #fff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack contents vertically on smaller screens */
    gap: 0.2rem; /* Reduce gap between items */
    padding: 0.5rem 0.75rem; /* Adjust padding */
  }
`;

const Emoji = styled.span`
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem; /* Adjust font size for smaller screens */
  }
`;



// Main component
const StudyJamComponent = ({ dataLength }) => {
  return (
    <Container>
      <Subtitle>GDSC</Subtitle>
      <Title>SSGMCE, Shegaon</Title>
      <Title><Highlight>GEN AI STUDY JAMS</Highlight></Title>
      <Badge>
        <Highlight>GEN AI Graduates</Highlight> {dataLength} <Emoji>🎉</Emoji>
      </Badge>
    </Container>
  );
};

export default StudyJamComponent;
