import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/HomePage/HomePage.view';
import { Provider } from 'react-redux';
import { store } from './reduxStore';

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

const TrailBlazerApp = App;

ReactDOM.render(<TrailBlazerApp />, document.getElementById('root'));
