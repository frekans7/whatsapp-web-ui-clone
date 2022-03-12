import styled from 'styled-components';
import { useContext } from 'react';
import { IconButton } from '../index';
import * as Icons from '../icons';
import { GlobalState } from '../../store/context/globalState';

const Box = styled.div`
  display: flex;
  align-items: center;
  height: 3.6875rem;
  background-color: var(--header-bg);
`;
const Sticky = styled.div`
  position: sticky;
  top: 0;
  overflow-y: auto;
  z-index: 1;
`;

const Button = styled.div`
  margin-left: 1.5rem;
  font-size: 1.5rem;
`;
const Text = styled.div`
  display: flex;
  align-items: center;
  max-width: 35.4375rem;
  min-width: 5.5rem;
  margin-left: 1.875rem;
`;

function ContactInfo() {
  const { dispatch } = useContext(GlobalState);

  return (
    <Sticky>
      <Box>
        <Button>
          <IconButton
            onClick={() => {
              dispatch({ type: 'Close' });
            }}
          >
            <Icons.Close />
          </IconButton>
        </Button>
        <Text>Contact info</Text>
      </Box>
    </Sticky>
  );
}

export default ContactInfo;
