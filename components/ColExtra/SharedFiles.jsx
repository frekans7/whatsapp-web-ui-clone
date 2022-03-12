import styled from 'styled-components';
import Image from 'next/image';

import { IconButton, Space } from '../index';
import * as Icons from '../icons';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  height: 10.188rem;
  background-color: var(--component-bg);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 2rem 1rem 2rem;
`;
const Text = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.875rem;
  color: var(--text-gray);
`;

const Button = styled(IconButton)`
  font-size: 1.2rem;
  color: var(--text-gray);
`;

const Media = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 22.438rem;
  height: 6.688rem;
  margin-left: 1.875rem;
  margin-right: 1.5rem;
  margin-bottom: 0.625rem;
`;

function SharedFiles() {
  return (
    <>
      <Box>
        <Header>
          <Text>Media, Links and Docs</Text>
          <Button>
            <Icons.ArrowRight />
          </Button>
        </Header>
        <Media>
          <Image
            src="/media.png"
            alt="media"
            width={104}
            height={95}
            quality={100}
          />
          <Image
            src="/media2.png"
            alt="media2"
            width={104}
            height={95}
            quality={100}
          />
          <Image
            src="/media3.png"
            alt="media3"
            width={104}
            height={95}
            quality={100}
          />
        </Media>
      </Box>
      <Space />
    </>
  );
}

export default SharedFiles;
