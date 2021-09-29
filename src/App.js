import React, { memo, useState } from 'react';
import './App.css';

// import store from './store';
// import { Provider } from 'react-redux';

import Authenticated from './authenticated-app';
import Unauthenticated from './unauthenticated-app';

function App() {
  const [user, setUser] = useState(true);
  return (
    // <Provider store={store}>
    <div>
      {user ? (
        <Authenticated setLogin={setUser} />
      ) : (
        <Unauthenticated setLogin={setUser} />
      )}
    </div>
    // </Provider>
  );
}

export default memo(App);
