export function user(state, action) {
  switch (action.type) {
    case "NAME":
      return { ...state, user: action.payload};
    // case "DOB":
    //   return { ...state, user: action.payload };
    // case "EMAIL":
    //   return { ...state, user: action.payload };
    default:
      return state;
  }
}
