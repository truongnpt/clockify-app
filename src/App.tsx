import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet-async';
import { ThemeProvider } from 'emotion-theming';
import { Switch, Route, BrowserRouter as Router, useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from './styles/global-styles';
import theme from './styles/theme';
import { Login } from './containers/Login';
import { Provider } from 'react-redux';
import { configureAppStore } from './store/configureStore';
import './styles/app.scss';

const store = configureAppStore();

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Helmet
        titleTemplate={'%s - ' + 'Welcome to Clockify'}
        defaultTitle={'Welcome to Clockify'}
      >
        <meta name="description" content="Clockify" />
      </Helmet>
      <Router> 
        <Switch>
          <Route path="/" component={Login} />
          <Route path="/login" component={Login} />
        </Switch>
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

