import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroText>
          <h1>Welcome to Divine Designs</h1>
          <p>Transforming your events into unforgettable experiences.</p>
        </HeroText>
      </HeroSection>
      <IntroSection>
        <h2>Our Services</h2>
        <p>
          We specialize in decorating for all types of events, including
          weddings, birthdays, showers, and more.
        </p>
      </IntroSection>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const HeroSection = styled.section`
  width: 100%;
  height: 60vh;
  background: url('/path-to-your-hero-image.jpg') no-repeat center center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
`;

const HeroText = styled.div`
  text-align: center;
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.5rem;
  }
`;

const IntroSection = styled.section`
  width: 100%;
  max-width: 1200px;
  text-align: center;
  margin-top: 2rem;
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.25rem;
  }
`;

export default Home;
