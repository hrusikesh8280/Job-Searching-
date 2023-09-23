import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store';
import { Provider } from "react-redux"
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>
    <ChakraProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </ChakraProvider>
    </Provider>
    </BrowserRouter>
  )
reportWebVitals();
