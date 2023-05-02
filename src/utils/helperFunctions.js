export function isValidate(newUser) {
  if (newUser.name === "" || newUser.role === "") {
    alert("Please Fill All The Fields");
    return false;
  }

  return true;
}
