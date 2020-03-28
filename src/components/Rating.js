import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarOutline } from '@fortawesome/free-regular-svg-icons';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const Rating = ({ average }) => {
  const decimal = ((average / 2) % 1).toFixed(2)
  let starsToRender = 5;
  let lastColoredStar = null;
  if (decimal > 0.2 && decimal <= 0.7) {
    starsToRender--;
    lastColoredStar = faStarHalfAlt;
  } else if (decimal > 0.7) {
    starsToRender--;
    lastColoredStar = faStar;
  }
  return(
    <StyledRating>
      <p className="rating-text">
        {average}<span className="of-ten">/10</span>
      </p>
      {[...Array(Math.floor(average / 2))].map((_, i) => {
        starsToRender--;
        return (
          <FaIcon
            key={i}
            icon={faStar}
            className="star yellow"
          />
        );
      })}
      {lastColoredStar &&
        <FaIcon
          icon={lastColoredStar}
          className="star yellow"
        />
      }
      {[...Array(starsToRender)].map((_, i) => {
        console.log("s: ", i);
        return (
          <FaIcon
            key={i}
            icon={faStarOutline}
            className="star"
          />
        );
      })}
    </StyledRating>
  );
}

const StyledRating = styled.div`
  .rating-text {
    color: white;
    margin: 0;
    text-align: right;
    font-size: 24px;

    .of-ten {
      color: gray;
      font-size: 16px;
    }
  }

  .star {
    color: gray;
    margin: 4px 1px;
    font-size: 18px;

    &.yellow {
      color: #ECC94B;
    }
  }
`;

export default Rating;
