import ACTION_TYPE from '../actions/actionTypes';

const initialState = {
  qtns: [],
};

const getQuestionsReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case ACTION_TYPE.GET_ALL_QUESTIONS:
      return { qtns: payload };
    default:
      return state;
  }
};

export default getQuestionsReducer;
