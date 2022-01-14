export default function appReducer(state, action) {
  switch (action.type) {
    case "ADD_USER":
      return {
        users: [...state.users, action.payload]
      };

    case 'DELETE_USER':
    return {
        users: []
    }

    default:
      break;
  }
}
