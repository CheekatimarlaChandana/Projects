
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Weather from './component/weather';

const App = () => (
  <Provider store={store}>
    <Weather />
  </Provider>
);
 

export default App;