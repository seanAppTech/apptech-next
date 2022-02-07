import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/Theme';
import { GlobalStyles } from '../styles/GlobalStyles';
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp
