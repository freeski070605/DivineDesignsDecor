import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutContainer>
      <AboutContent>
        <h1>About Us</h1>
        <p>
          Divine Designs is a premier design and decor company that specializes
          in transforming spaces for all types of events. With years of
          experience and a passion for creativity, we ensure that every event is
          unique and memorable.
        </p>
        <p>
          Our mission is to bring your vision to life with our expert design and
          decor services. Whether it's a wedding, birthday, or corporate event,
          we are dedicated to creating beautiful and personalized experiences
          for our clients.
        </p>
      </AboutContent>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #fff;
`;

const AboutContent = styled.div`
  max-width: 800px;
  text-align: center;
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
`;

export default About;
