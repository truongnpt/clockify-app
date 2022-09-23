import * as React from 'react';
import './App.css';
import { Helmet } from 'react-helmet-async';
import { ThemeProvider } from 'emotion-theming';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import styled from '@emotion/styled';
import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from './styles/global-styles';
import theme from './styles/theme';
import { Login } from './containers/Login';
import './styles/app.scss';
import { Layout } from 'containers/Layout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Helmet
        titleTemplate={'%s - ' + 'Welcome to U-Work'}
        defaultTitle={'Welcome to U-Work'}
      />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Layout />
        <ToastContainerStyled
          position="bottom-left"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <GlobalStyle />
      </Router>
    </ThemeProvider>
  );
}

export default App;

const ToastContainerStyled = styled(ToastContainer)<any>`
  .Toastify__toast-body {
    padding-right: ${props => props.theme.space.xl};
  }
  .Toastify__toast--default {
    width: auto;
  }
`;
