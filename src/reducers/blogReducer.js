let initialState ={
  blogs:[],
  next:null
}
export default function blogReducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_BLOG_FULFILLED':
        let data = action.payload.data
        return Object.assign({
            blogs:data.results,
            next:data.next
        },data)

        case 'FETCH_BLOG_SCROLL_FULFILLED': 
        let scrollData = action.payload.data
        return Object.assign({}, state, {
          blogs: state.blogs.concat(scrollData.results),
          next: scrollData.next,
        })

      default: return state;
    }
  }