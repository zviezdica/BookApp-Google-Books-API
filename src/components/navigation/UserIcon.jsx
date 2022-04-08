import React, { useContext, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import userIcon from "../../images/icons/user.png";
import { UserContext } from "../authenticate/UserContext";

const UserIcon = () => {
  const { user, isLogOutActive, setIsLogOutActive } = useContext(UserContext);
  const mdScreen = useMediaQuery({ query: "(min-width: 992px)" });

  return (
    <div
      className="flex cursor-pointer "
      onClick={() => setIsLogOutActive(!isLogOutActive)}
    >
      <div
        style={{ backgroundImage: `url(${userIcon})` }}
        className="h-30 w-30 md:h-20 md:w-20 bg-center bg-cover"
      ></div>
      {mdScreen && <h4 className="pl-10">{user.email}</h4>}
    </div>
  );
};

export default UserIcon;
