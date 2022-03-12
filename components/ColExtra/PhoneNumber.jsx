import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 3.75rem;
  background-color: var(--component-bg);
`;
const Box = styled.div`
  display: flex;
  margin-left: 1.875rem;
`;

function PhoneNumber() {
  return (
    <Container>
      <Box>+90 123 456 78 90</Box>
    </Container>
  );
}
export default PhoneNumber;
