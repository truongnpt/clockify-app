import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
interface Props {
  Component: typeof App;
}
const helmetContext = {};

const ConnectedApp = ({ Component }: Props) => (
  <HelmetProvider context={helmetContext}>
    <React.StrictMode>
      <Component />
    </React.StrictMode>
  </HelmetProvider>
);

const render = (Component: typeof App) => {
  root.render(<ConnectedApp Component={Component} />);
};

render(App);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
