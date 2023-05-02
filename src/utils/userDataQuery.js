import axios from "axios";
import { useQuery } from "react-query";

export const AllUsersData = () => {
  return useQuery("users", fetchAllUser);
};
function fetchAllUser() {
  return axios.get("http://localhost:4000/users");
}

export const UserData = ({ username = "" }) => {
  return useQuery(["users", username], fetchUser.bind(null, username), {
    enabled: true,
  });
};
function fetchUser(username) {
  return axios.get("http://localhost:4000/users", {
    params: { username: username },
  });
}
