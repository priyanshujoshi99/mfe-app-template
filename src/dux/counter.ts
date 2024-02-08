import { IAction } from './interface/ICommonDux';

const prefix = 'counter';
export const INCREASE_COUNTER = `${prefix}/increaseCounter`;
export const DECREASE_COUNTER = `${prefix}/decreaseCounter`;

interface State {
  value: number;
}

export const increaseCounter = (count: number) => ({
  type: INCREASE_COUNTER,
  payload: count
});

export const decreaseCounter = (count: number) => ({
  type: DECREASE_COUNTER,
  payload: count
});

const initialState: State = {
  value: 0
};

const counterReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return {
        ...state,
        value: state.value + action.payload
      };

    case DECREASE_COUNTER:
      return {
        ...state,
        value: state.value - action.payload
      };

    default:
      return state;
  }
};

export default counterReducer;

// selectors

export const getCountValue = ({ counter: { value } }: { counter: State }) =>
  value;
