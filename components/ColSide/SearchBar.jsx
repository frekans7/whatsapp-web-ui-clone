import styled, { keyframes } from 'styled-components';
import { useState } from 'react';

import IconButton from '../others/IconButton';
import * as Icons from '../icons';

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--component-bg);
  height: 3.0625rem;
`;

const Box2 = styled.div`
  display: flex;
  align-items: center;
  border-radius: 1.125rem;
  background-color: var(--header-bg);
  color: var(--gray);
  width: 24.563rem;
  height: 1.875rem;
  margin-left: 0.875rem;
  margin-right: 0.875rem;
`;

const SearchButton = styled(IconButton)`
  margin-top: 0.1rem;
  margin-left: 0.75rem;
  font-size: 1.5rem;
`;

const Text = styled.div`
  display: flex;
  margin-left: 1.8125rem;
  margin-right: 2rem;
  width: 100%;
  height: 1.25rem;
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-size: 0.9375rem;
  background-color: var(--header-bg);
`;

const BackIcon = styled(Icons.Back)`
  color: var(--blue);
`;

const rotate = keyframes`
  from {
    transform: rotate(270deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const rotate2 = keyframes`
  from {
    transform: rotate(90deg);
  }
  to {
    transform: rotate(45deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 0.25s linear;
`;
const Rotate2 = styled.div`
  display: inline-block;
  animation: ${rotate2} 0.25s linear;
`;

function SearchBar() {
  const [focus, setFocus] = useState(0);
  return (
    <Box>
      <Box2>
        <SearchButton>
          {focus === 0 ? (
            <Rotate2>
              <Icons.Search />
            </Rotate2>
          ) : (
            <Rotate>
              <BackIcon />
            </Rotate>
          )}
        </SearchButton>

        <Text>
          <Input
            type="text"
            placeholder="Search or start new chat"
            onFocus={(e) => {
              e.target.placeholder = '';
              setFocus(1);
            }}
            onBlur={(e) => {
              e.target.placeholder = 'Search or start new chat';
              setFocus(0);
            }}
          />
        </Text>
      </Box2>
    </Box>
  );
}

export default SearchBar;
