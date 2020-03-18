import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ButtonGroup from '../components/ButtonGroup';
import { ButtonInGroup } from '../components/Button';

const Pagination = ({ page, totalPages }) => {
  return(
    <ButtonGroup>
      <ButtonInGroup to={`?page=${page == 1 ? page : page - 1}`}>
        Prev
      </ButtonInGroup>
      <ButtonInGroup to="?page=1">
        1
      </ButtonInGroup>
      <ButtonInGroup to={`?page=${totalPages}`}>
        {totalPages}
      </ButtonInGroup>
      <ButtonInGroup to={`?page=${page == totalPages ? page : page + 1}`}>
        Next
      </ButtonInGroup>
    </ButtonGroup>
  );
}

export default Pagination;
