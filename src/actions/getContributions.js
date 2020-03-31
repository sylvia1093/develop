// import store from 'store'
// import { API_BASE } from 'consts'
// import { preloaderHide, preloaderShow } from './preloader'

const getContributions = _ => {
  return dispatch => {
    // return dispatch(fetchUsers(activeContestId))
    //   .then(res => res.json())
    //   .then((users) => {
    //     dispatch({
    //       type: 'SET_USERS',
    //       users: users
    //     })
    //   })

    dispatch({
      type: 'SET_CONTRIBUTIONS',
      contributions: [
        {
          name: 'Jackson Lipski',
          ago: '2 hours',
          desc:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.',
          views: 63,
          shares: 3,
          comments: 10
        },
        {
          name: 'Lawell Powell',
          ago: '2 hours',
          desc:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
          views: 63,
          shares: 3,
          comments: 10
        },
        {
          name: 'Vinnie Nebraska',
          ago: '2 hours',
          desc:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl.',
          views: 63,
          shares: 3,
          comments: 10
        }
      ]
    });
  };
};

// const fetchUsers = () => {
//   const activeContestId = store.getState().activeContest.id

//   const requestOptions = {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   }

//   return fetch(
//     API_BASE + `/contests/${activeContestId}/users`,
//     requestOptions
//   )
// }

export default getContributions;
