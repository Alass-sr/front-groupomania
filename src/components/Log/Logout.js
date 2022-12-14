import React from "react";
import axios from "axios";
import cookie from "js-cookie";

const Logout = () => {
  const removeCookie = (key) => {
    if (window !== "undefined") {
      cookie.remove(key, { expires: 1 });
    }
  };

  const logout = async () => {
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/user/logout`,
      withCredentials: true,
    })
      .then(() => removeCookie("jwt"))
      .catch((error) => console.log(error));

    window.location = "/";
  };

  return (
    <li onClick={logout}>
      <img src="./img/logout.svg" alt="LogOut" />
    </li>
  );
};

export default Logout;
