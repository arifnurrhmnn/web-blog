const initialState = {
  name: "Jack Berwin",
};

const globalReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
    };
  }

  return state;
};

export default globalReducer;
