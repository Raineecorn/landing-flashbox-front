import React from 'react';
import LoginForm from '../../../components/LoginForm/loginUser';
import './landing-userPage.css'; 

function landingUserPage() {
    return(
        <div className="Login-Page-Container">
            <div className="title-header mt-5 text-white mb-3 text-center">
                <h1> Track Your Parcel details here </h1>
            </div>
            
            <div className="login-form-user mb-5">
                <LoginForm /> 
            </div>
        </div>
    );

}

export default landingUserPage; 