const INITIAL_STATE = {
  is_authorized: localStorage.getItem('is_auth') || false
};

export default function Auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_AUTHERIZATION":
      return { ...state, is_authorized: action.payload };
    default:
      return state;
  }
}