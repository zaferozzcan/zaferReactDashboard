export const createProjectAction = (project) => {
  return (dispatch, getState) => {
    dispatch({ type: "CREATE_PROJECT", project });
  };
};
