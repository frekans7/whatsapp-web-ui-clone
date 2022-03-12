import React from 'react';

import {
  ContactInfo,
  ContactProfile,
  SharedFiles,
  MuteNotifications,
  StarredMessages,
  DisappearingMessages,
  AboutPhoneNumber,
  PhoneNumber,
  Block,
  ReportContact,
  DeleteChat,
} from '../components';

export default {
  title: 'RightSidebar',
};

export const Contact = () => <ContactInfo />;
export const Profile = () => <ContactProfile />;
export const Shared = () => <SharedFiles />;
export const MuteNotify = () => <MuteNotifications />;
export const Starred = () => <StarredMessages />;
export const Disappearing = () => <DisappearingMessages />;
export const About = () => <AboutPhoneNumber />;
export const Phone = () => <PhoneNumber />;
export const BlockContact = () => <Block />;
export const Report = () => <ReportContact />;
export const Delete = () => <DeleteChat />;
