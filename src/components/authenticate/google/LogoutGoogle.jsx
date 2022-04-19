import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId =
  "526686431867-umvitfho0m8ggufvv14ha49h4uo5ta79.apps.googleusercontent.com";

const LogoutGoogle = () => {
  const onSuccess = () => {
    alert("Logout made successfully");
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
};

export default LogoutGoogle;
