import React, {useEffect, useState} from 'react'

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin : (email, password) => {} 
})

export const AuthContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {

      const isUserLoggedIn = localStorage.getItem('isLoggedIn');
      if(isUserLoggedIn === '1') {
        setIsLoggedIn(true);
      }
    }, [])

    const loginHandler = (email, password) => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
      };
    
      const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
      };

      const contextValues = {
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler
      }

   return(
        <AuthContext.Provider 
            value={contextValues}
        >{props.children}</AuthContext.Provider>
   );
}

export default AuthContext;