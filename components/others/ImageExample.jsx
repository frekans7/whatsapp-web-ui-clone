import styled from 'styled-components';
import Image from 'next/image';

const Box = styled.div`
  display: flex;
`;

function ImageExample() {
  return (
    <Box>
      <Image
        src="/wallpaper.jpeg"
        alt="media"
        width={1440}
        height={900}
        quality={100}
      />
    </Box>
  );
}

export default ImageExample;
