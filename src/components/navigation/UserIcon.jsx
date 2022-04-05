import React, { useContext, useEffect, useState } from "react";
import userIcon from "../../images/icons/user.png";
import { UserContext } from "../authenticate/UserContext";

const UserIcon = () => {
  const { user, isLogOutActive, setIsLogOutActive } = useContext(UserContext);

  return (
    <div
      className="flex cursor-pointer"
      onClick={() => setIsLogOutActive(!isLogOutActive)}
    >
      <div
        style={{ backgroundImage: `url(${userIcon})` }}
        className="h-20 w-20 bg-center bg-cover"
      ></div>
      <h4 className="pl-10">{user.email}</h4>
    </div>
  );
};

export default UserIcon;
