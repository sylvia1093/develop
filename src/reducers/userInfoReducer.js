const initialState = {
    avatar: null,
    email: null,
    first_name: null,
    last_name:null,
    passion:null,
    id:null
  }
  export default function userInfoReducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_USERDETAILS_FULFILLED':
        let data = action.payload.data
        return Object.assign({},{
          email:data.email,
          first_name:data.first_name,
          last_name:data.last_name,
          passion:data.passion,
          image:data.image,
          id:data.id
        })
      case 'CLEAR_USERDETAILS': return initialState
      default: return state;
    }
  }