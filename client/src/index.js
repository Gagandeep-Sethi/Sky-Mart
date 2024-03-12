import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider} from 'react-redux';
import appStore from './utility/store/appStore';


const AppContainer = () => {

  return (
    <Provider store={appStore}>
      <App/>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppContainer />);


