export default function appReducer(state, action) {

    console.log(state, action)
    return {
        users: [...state.users, action.payload]
    }


    // switch (action.type) {
    //     case 'ADD_USER':
    //         return {
    //             ...state,
    //             users: [...state.users, action.payload]
    //         }

    //     default:
    //         break;
    // }
    
}