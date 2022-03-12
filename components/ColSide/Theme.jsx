/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;
  height: 16.4375rem;
  background-color: var(--chose-theme);
  font-size: 1.25rem;
  border-radius: 3px;
  box-shadow: 0px 17px 50px 0px #0b141a;
`;

const Text = styled.div`
  display: flex;
  width: 22rem;
  height: 1.25rem;
  margin: 1.5rem;
`;

const Label = styled.label`
  color: var(--text-gray);
  margin-bottom: 0.7rem;
  cursor: pointer;
`;

const RadioButton = styled.input`
  margin-left: 1.5rem;
  margin-right: 0.3125rem;
`;

const ButtonGroup = styled.div`
  margin-left: 12rem;
  margin-top: 2rem;
`;
const OkButton = styled.button`
  width: 4.25rem;
  height: 2.25rem;
  background-color: var(--text-green2);
  color: white;
  outline: inherit;
  border: inherit;
  border-radius: 3px;
  cursor: pointer;
`;

const CancelButton = styled.button`
  width: 6.4375rem;
  height: 2.25rem;
  background-color: inherit;
  color: var(--text-green2);
  outline: inherit;
  border: 1px solid var(--text-green2);
  margin-right: 0.5rem;
  border-radius: 3px;
  cursor: pointer;
`;

function Theme({ onClose }) {
  const { theme, setTheme } = useTheme();
  const [radioValue, setRadioValue] = useState();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const getValue = (e) => {
    setRadioValue(e.target.value);
  };
  const updateTheme = () => {
    setTheme(radioValue);
    onClose();
  };

  return (
    <Container>
      <Text>Choose Theme</Text>
      <Label key="light">
        <RadioButton
          type="radio"
          value="light"
          name="myTheme"
          onClick={getValue}
          defaultChecked={theme === 'light'}
        />{' '}
        Light
      </Label>
      <Label key="dark">
        <RadioButton
          type="radio"
          value="dark"
          name="myTheme"
          onClick={getValue}
          defaultChecked={theme === 'dark'}
        />{' '}
        Dark
      </Label>
      <Label key="system">
        <RadioButton
          type="radio"
          value="system"
          name="myTheme"
          onClick={getValue}
          defaultChecked={theme === 'system'}
        />{' '}
        System Default
      </Label>
      <ButtonGroup>
        <CancelButton onClick={handleCloseClick}>CANCEL</CancelButton>
        <OkButton onClick={updateTheme}>OK</OkButton>
      </ButtonGroup>
    </Container>
  );
}

Theme.propTypes = {
  onClose: PropTypes.any,
};

export default Theme;
