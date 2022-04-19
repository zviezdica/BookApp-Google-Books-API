import React from "react";
import { GoogleLogin } from "react-google-login";
import { useContext } from "react";
import { UserContext } from "../UserContext";

const clientId =
  "526686431867-umvitfho0m8ggufvv14ha49h4uo5ta79.apps.googleusercontent.com";

const LoginGoogle = () => {
  const { accessToken, setAccessToken } = useContext(UserContext);
  const onSuccess = (res) => {
    console.log("Login success, currentUser: ", res);
    setAccessToken(res.accessToken);
  };

  const onFailure = (res) => {
    console.log("Login failes, res:", res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
      />
    </div>
  );
};

export default LoginGoogle;
