import ACTION_TYPE from '../actions/actionTypes';

const initialState = {
  Question: {
    title: '',
    description: '',
    tags: '',
  },
};

const postQtnReducer = (state = initialState, action) => {
  const QtnData = {
    ...state,
    data: action.payload,
  };
  const getQtnData = {
    ...state,
    Question: action.payload,
  };
  switch (action.type) {
    case ACTION_TYPE.GET_QUESTION_INPUT:
      return getQtnData;
    case ACTION_TYPE.POST_A_QUESTION_SUCCESS:
      return QtnData;
    case ACTION_TYPE.POST_A_QUESTION_FAILURE:
      return QtnData;
    default: return state;
  }
};

export default postQtnReducer;
