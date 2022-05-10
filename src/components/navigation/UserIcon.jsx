import React, { useContext, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { userIcon } from "../../images/icons";
import { UserContext } from "../../contexts/UserContext";
import { LogOut } from ".";

const UserIcon = () => {
  const { user } = useContext(UserContext);
  const [isLogOutActive, setIsLogOutActive] = useState(false);
  const mdScreen = useMediaQuery({ query: "(min-width: 992px)" });
  console.log(isLogOutActive);

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
      {isLogOutActive && <LogOut setIsLogOutActive={setIsLogOutActive} />}
    </div>
  );
};

export default UserIcon;
