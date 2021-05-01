import React, {useContext} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './components/context/auth-context';

const App = () =>  {
  const context = useContext(AuthContext);

 return (
    <>
      <MainHeader />
        <main>
          {!context.isLoggedIn && <Login onLogin={context.logoutHandler} />}
          {context.isLoggedIn && <Home onLogout={context.logoutHandler} />}
        </main>
    </>
  );
}

export default App;
