import React from 'react';
import styled from 'styled-components';

const Gallery = () => {
  return (
    <GalleryContainer>
      <h1>Gallery</h1>
      <ImageGrid>
        <ImageItem src="/path-to-image1.jpg" alt="Gallery Image 1" />
        <ImageItem src="/path-to-image2.jpg" alt="Gallery Image 2" />
        <ImageItem src="/path-to-image3.jpg" alt="Gallery Image 3" />
        <ImageItem src="/path-to-image4.jpg" alt="Gallery Image 4" />
      </ImageGrid>
    </GalleryContainer>
  );
};

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #fff;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  width: 100%;
  max-width: 1200px;
`;

const ImageItem = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export default Gallery;
