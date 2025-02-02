const initialState ={
  friends: [],
};


export function manageFriends(state=initialState, action) {
  switch (action.type){
    case "friends/add":{
      return{
        ...state,
        friends:[
          ...state.friends,{
            name:action.payload.name,
            hometown:action.payload.hometown,
            id:action.payload.id,
          }
        ]
      };
    }
    case "friends/remove":
    return{
      ...state,
      friends: state.friends.filter((friend)=>friend.id !== action.payload),
    };
    default:
      return state;
  }
}