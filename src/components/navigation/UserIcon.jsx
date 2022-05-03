import React, { useContext, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { userIcon } from "../../images/icons";
import { UserContext } from "../../contexts/UserContext";
import { LogOut } from ".";

const UserIcon = () => {
  const { user, isLogOutActive, setIsLogOutActive } = useContext(UserContext);
  const mdScreen = useMediaQuery({ query: "(min-width: 992px)" });

  return (
    <div className="relative">
      <div
        className="flex cursor-pointer"
        onClick={() => setIsLogOutActive(!isLogOutActive)}
      >
        <div
          style={{ backgroundImage: `url(${userIcon})` }}
          className="h-40 w-40 md:h-30 md:w-30 bg-center bg-cover"
        ></div>
        {mdScreen && <h4 className="pl-10">{user.email}</h4>}
      </div>
      {isLogOutActive && <LogOut />}
    </div>
  );
};

export default UserIcon;
