import React from 'react';

import users from '../data';

import {
  SideHeader,
  DesktopNotifications,
  SearchBar,
  NewChat,
} from '../components';

export default {
  title: 'LeftSidebar',
};

export const Header = () => <SideHeader />;

export const Notifications = () => <DesktopNotifications />;

export const Search = () => <SearchBar />;

export const NewChatItem = () => <NewChat props={users} />;
