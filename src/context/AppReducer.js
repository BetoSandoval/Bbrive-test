export default function appReducer(state, action) {
  switch (action.type) {
    case "ADD_USER":
      return {
        users: [...state.users, action.payload],
      };

    case "DELETE_USER":
      return {
        users: state.users.filter( user => user.id !==  action.payload)
      };
    case "UPDATE_USER":
      const updatedUser = action.payload

     const updatedUsers = state.users.map( user => {
        if(user.id === updatedUser.id ){
          user.name = updatedUser.name
          user.phone = updatedUser.phone
          user.email = updatedUser.email
        }
        return user;
      } )

      return {
        users: updatedUsers
      };

    default:
      break;
  }
}
