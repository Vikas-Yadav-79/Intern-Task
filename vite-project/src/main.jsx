import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'



if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      console.log('Service worker registered: ', registration);
    }).catch(error => {
      console.log('Service worker registration failed: ', error);
    });
  });
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </ChakraProvider>
)
// serviceWorkerRegistration.register();