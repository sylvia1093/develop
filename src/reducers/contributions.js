const contributions = (state, action) => {
  switch (action.type) {
    case 'SET_CONTRIBUTIONS':
      return action.contributions;

    default:
      return state || [];
  }
};

export default contributions;
