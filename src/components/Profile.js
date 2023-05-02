import React from "react";
import { useAuth } from "../utils/auth";

const Profile = () => {
  const auth = useAuth();

  if (auth.user === null) {
    return <h1>Loading</h1>;
  }
  return (
    <div className="container">
      {`Welcome ${auth.user.username}`}
      <div className="card">
        <span>Username:{auth.user.username}</span>
        <span>Role:{auth.user.role}</span>
      </div>
    </div>
  );
};

export default Profile;
