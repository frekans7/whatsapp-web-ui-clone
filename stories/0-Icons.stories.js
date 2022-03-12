import React from 'react';
import styled from 'styled-components';

import * as Icons from '../components/icons';

const Svg = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  font-size: 3rem;
  grid-gap: 1.25rem;
  padding: 1.25rem;
`;

export default {
  title: 'Icons',
};

export const Icon = () => (
  <Svg>
    <Icons.AddUser />
    <Icons.ArrowDown />
    <Icons.ArrowLeft />
    <Icons.ArrowRight />
    <Icons.ArrowTop />
    <Icons.Attach />
    <Icons.Back />
    <Icons.Block />
    <Icons.ChatWallpaper />
    <Icons.Close />
    <Icons.Computer />
    <Icons.Delete />
    <Icons.DoubleTick />
    <Icons.ExitGroup />
    <Icons.GitHub />
    <Icons.Help />
    <Icons.InviteGroupLink />
    <Icons.KeyboardShortcuts />
    <Icons.Menu />
    <Icons.Microphone />
    <Icons.NewGroup />
    <Icons.NewMessage />
    <Icons.Notifications />
    <Icons.NotificationsSlash />
    <Icons.Pencil />
    <Icons.ReportContact />
    <Icons.Search />
    <Icons.Smile />
    <Icons.Status />
    <Icons.StatusRotate />
    <Icons.StatusUpdate />
    <Icons.Theme />
    <Icons.Tick />
  </Svg>
);
