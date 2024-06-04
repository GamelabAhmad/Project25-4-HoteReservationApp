import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Star = styled(FontAwesomeIcon)`
  color: gold;
  margin-right: 3px; /* Mengurangi jarak antara bintang-bintang */
`;

const StarContainer = styled.div`
  display: inline-block; /* Membuat bintang-bintang menjadi satu baris */
`;

const RatingStars = ({ rating }) => {
  const totalStars = 5;
  const stars = [];

  for (let i = 0; i < totalStars; i++) {
    if (i < rating) {
      stars.push(<Star key={i} icon={faStar} />);
    } else {
      stars.push(<Star key={i} icon={faStar} style={{ color: '#ccc' }} />);
    }
  }

  return <StarContainer>{stars}</StarContainer>; // Mengelompokkan bintang-bintang dalam satu wadah
};

export default RatingStars;
