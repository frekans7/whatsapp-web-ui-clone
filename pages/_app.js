import PropTypes from 'prop-types';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import React from 'react';

import Provider from '../store';
import GlobalStyle from '../styles/globalStyle';

function App({ Component, pageProps }) {
  return (
    <Provider>
      <GlobalStyle />
      <ThemeProvider defaultTheme="light">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="WhatsApp Web UI Clone created by @frekans7"
          />
          <title>WhatsApp</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
        <div id="modal-root" />
      </ThemeProvider>
    </Provider>
  );
}

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default App;
