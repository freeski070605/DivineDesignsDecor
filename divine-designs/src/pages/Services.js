import React from 'react';
import styled from 'styled-components';

const Services = () => {
  return (
    <ServicesContainer>
      <ServicesContent>
        <h1>Our Services</h1>
        <ServiceList>
          <ServiceItem>
            <h2>Weddings</h2>
            <p>
              We create magical wedding experiences with elegant decor that
              reflects your personal style.
            </p>
          </ServiceItem>
          <ServiceItem>
            <h2>Birthdays</h2>
            <p>
              Celebrate your special day with beautifully themed decorations and
              personalized touches.
            </p>
          </ServiceItem>
          <ServiceItem>
            <h2>Showers</h2>
            <p>
              From baby showers to bridal showers, we design memorable and
              charming celebrations.
            </p>
          </ServiceItem>
          <ServiceItem>
            <h2>Corporate Events</h2>
            <p>
              Professional and stylish decor for corporate events, conferences,
              and meetings.
            </p>
          </ServiceItem>
        </ServiceList>
      </ServicesContent>
    </ServicesContainer>
  );
};

const ServicesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #fff;
`;

const ServicesContent = styled.div`
  max-width: 1200px;
  text-align: center;
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

const ServiceList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

const ServiceItem = styled.div`
  background-color: #f4f4f4;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.125rem;
  }
`;

export default Services;
