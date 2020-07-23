export const createProject = project => {
  return (dispatch, getState) => {
    // makeing async call here to get a data!
    dispatch({ type: "CREATE_PROJECT", project: project });
  };
};
