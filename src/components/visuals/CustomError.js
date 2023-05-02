import React from "react";

const CustomError = ({ error }) => {
  return (
    <div>
      <h2 className="error">
        Error while fetching data :{error.message}
        <br />
        please ensure that json server is running
      </h2>
    </div>
  );
};

export default CustomError;
