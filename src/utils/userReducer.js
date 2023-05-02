export function reducer(oldUser, action) {
  if (action.type === "changed") {
    let tempUser = structuredClone(oldUser);
    let newValue = action.value;
    tempUser[action.field] = newValue;
    return tempUser;
  } else {
    throw Error("Unknown action: " + action.type);
  }
}
