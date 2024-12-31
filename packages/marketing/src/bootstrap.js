import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount function to start up the marketing app
const mount = (el) => {
  ReactDOM.render(
    <App/>,
    el
  );
};  


// If we are in development and in isolation, call mount immidiately
if(process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');
  console.log('%cpackages/marketing/src/bootstrap.js:18 devRoot', 'color: #007acc;', devRoot);
  if(devRoot) {
    mount(devRoot);
  }
}

// If we are running through container, we should export the mount function
export { mount };