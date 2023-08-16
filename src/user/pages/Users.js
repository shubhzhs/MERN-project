import React from "react";

import UsersList from "../components/UsersList";
import ProfileImage from "./IMG-20210514-WA0006.jpg";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Shubh Sonawane",
      image: ProfileImage,
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
