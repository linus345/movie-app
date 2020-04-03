import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { useOutsideAlerter } from '../utils';

const Search = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const formRef = useRef(null);
  let history = useHistory();

  useOutsideAlerter(formRef, () => {
    setIsOpen(false);
  });

  useEffect(() => {
    if(isOpen) {
      // switch focus to form input when form opens
      formRef.current.children[0].focus();
    }
  }, [isOpen]);

  const handleSubmit = e => {
    e.preventDefault();
    if(isOpen && search.length < 1) return;
    if(isOpen) {
      history.push(`/search/${search}`);
    }
    setSearch("");
    setIsOpen(isOpen => !isOpen);
  }

  return(
    <StyledSearchWrapper {...props}>
      <StyledSearch
        onSubmit={handleSubmit}
        isOpen={isOpen}
        ref={formRef}
      >
        {isOpen && (
          <input
            type="text"
            placeholder="Search"
            onChange={e => setSearch(e.target.value)}
          />
        )}
        <button
          type="submit"
        >
          <FaIcon
            icon={faSearch}
            className="icon"
          />
        </button>
      </StyledSearch>
    </StyledSearchWrapper>
  );
}

const StyledSearchWrapper = styled.div`
  z-index: 2;
  grid-column: 3 / span 1;
  width: 36px;
  height: 36px;
  margin: 17px;
  transition: 0.2s;

  ${props => !props.isTablet && css`
    position: fixed;
    right: 0;
    top: 0;
  `}
`;

const StyledSearch = styled.form`
  position: relative;
  grid-column: 3 / span 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: ${props => props.theme.gray['800']};
  border-radius: 4px;
  color: white;
  width: 100%;
  height: 100%;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.gray['700']};
  }

  ${props => props.isOpen && css`
    background-color: ${props => props.theme.gray['900']};
    border-radius: 0 4px 4px 0;
    border: 2px solid blue;
    border-left: 1px solid ${props => props.theme.gray['800']};
  `}

  input {
    position: absolute;
    top: -2px;
    right: 34px;
    height: 36px;
    color: white;
    background-color: ${props => props.theme.gray['900']};
    border-radius: 4px 0 0 4px;
    border: 2px solid blue;
    border-right: none;
    font-size: 20px;
    padding: 2px 8px;
    width: 200px;
  }

  button {
    background-color: rgba(0, 0, 0, 0);
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0;

    .icon {
      width: 36px;
      height: 36px;
      padding: 8px;
    }
  }
`;

export default Search;
