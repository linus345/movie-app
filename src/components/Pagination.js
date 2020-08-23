import React from 'react';
import { Link } from 'react-router-dom';

import ButtonGroup from '../components/ButtonGroup';
import { ButtonInGroup } from '../components/Button';

const Pagination = ({ page, totalPages, mainEl }) => {
  const scrollToTop = el => {
    if("scrollTo" in el.current) {
      el.current.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } else {
      el.current.scrollTop = 0;
    }
  }

  return(
    <ButtonGroup>
      <ButtonInGroup
        as={Link}
        to={`?page=${page === 1 ? page : page - 1}`}
        onClick={() => scrollToTop(mainEl)}
      >
        Prev
      </ButtonInGroup>
      <ButtonInGroup
        as={Link}
        to="?page=1"
        onClick={() => scrollToTop(mainEl)}
      >
        1
      </ButtonInGroup>
      <ButtonInGroup
        as={Link}
        to={`?page=${totalPages}`}
        onClick={() => scrollToTop(mainEl)}
      >
        {totalPages}
      </ButtonInGroup>
      <ButtonInGroup
        as={Link}
        to={`?page=${page === totalPages ? page : page + 1}`}
        onClick={() => scrollToTop(mainEl)}
      >
        Next
      </ButtonInGroup>
    </ButtonGroup>
  );
}

export default Pagination;
