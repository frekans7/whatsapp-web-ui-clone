import styled from 'styled-components';

import {
  ContactInfo,
  ContactProfile,
  AboutPhoneNumber,
  SharedFiles,
  StarredMessages,
  MuteNotifications,
  DisappearingMessages,
  Block,
  ReportContact,
  DeleteChat,
} from '../index';

const Side = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--extra-bg);
  min-width: 17.5rem;
`;

function CoolExtra() {
  return (
    <Side>
      <ContactInfo />
      <ContactProfile />
      <AboutPhoneNumber />
      <SharedFiles />
      <StarredMessages />
      <MuteNotifications />
      <DisappearingMessages />
      <Block />
      <ReportContact />
      <DeleteChat />
    </Side>
  );
}

export default CoolExtra;
