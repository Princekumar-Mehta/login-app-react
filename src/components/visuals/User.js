import React, { useState } from "react";
import Button from "./Button";
const User = ({ existingUser }) => {
  let [updateId, setUpdateId] = useState(-1);

  return (
    <div className="card" key={existingUser.id}>
      <span>ID : {existingUser.id}</span>
      <span>Name : {existingUser.username}</span>
      <span>Role : {existingUser.role}</span>

      <hr />
    </div>
  );
};

export default User;
