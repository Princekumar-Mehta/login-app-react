import React from "react";

import { AllUsersData } from "../utils/userDataQuery";
import User from "./visuals/User";
import CustomError from "./visuals/CustomError";
const AllUsers = () => {
  const { isLoading, data, status, error } = AllUsersData(); // key, function call

  if (isLoading) {
    return <h2>Loading</h2>;
  } else if (status === "error") {
    return <CustomError error={error} />;
  } else {
    return (
      <>
        <h2>View Users Page</h2>
        {data.data.length === 0
          ? "No Users"
          : data.data.map((user) => {
              return <User key={user.id} existingUser={user} />;
            })}
      </>
    );
  }
};

export default AllUsers;
