import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const GoogleAuth = () => {
    return (
        <GoogleOAuthProvider clientId="994149903175-luf31tit9e33lbrrktohnugr51mcn33r.apps.googleusercontent.com">
            <GoogleLogin
                onSuccess={credentialResponse => {
                    console.log(credentialResponse); // Có email, token v.v.
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        </GoogleOAuthProvider>
    );
}

export default GoogleAuth;
