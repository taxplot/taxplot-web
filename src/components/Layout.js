import React, { useState } from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../style/theme';
import { Appbar } from '../components/Appbar';
import { TaxDrawer } from '../components/Drawer';
import { Footer } from '../components/Footer';
import { Helmet } from 'react-helmet';
import '../style/layout.css';

import { GlobalContext } from './RootContext';

export const Layout = ({
  elevateAppBar = true,
  children,
  title = 'tax·plot',
  id,
  folder,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleToggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const prezMode = React.useContext(GlobalContext);
  let ogImageLink = id
    ? 'https://taxplot.com/' + folder + '/' + id + '/og-image.png'
    : 'https://taxplot.com/taxplot-title.png';

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImageLink} />
      </Helmet>
      <CssBaseline />
      {!prezMode.prezMode && (
        <Appbar
          onToggleDrawer={handleToggleDrawer}
          elevation={Number(elevateAppBar)}
        />
      )}
      {children}
      {!prezMode.prezMode && <Footer />}
      <TaxDrawer open={isDrawerOpen} onClose={handleToggleDrawer} />
    </ThemeProvider>
  );
};
