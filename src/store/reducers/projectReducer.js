const initState = {
  projects: [
    { id: "1", title: "help me find peach", content: "blah blah blah" },
    { id: "2", title: "collect all the stars", content: "blah blah blah" },
    { id: "3", title: "egg hunt with zafer", content: "blah blah blah" }
  ]
};

const projectReducer = (state = initState, action) => {
  if (action.type === "CREATE_PROJECT") {
    console.log("created project", action);
  }
  return state;
};

export default projectReducer;
