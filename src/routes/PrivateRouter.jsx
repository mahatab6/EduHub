import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useLocation } from 'react-router';

const PrivateRouter = ({children}) => {
    
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return ;
    }

    if(!user){
        return <Navigator state={location.state} to="/login"></Navigator>
    }

    return children;
};

export default PrivateRouter;