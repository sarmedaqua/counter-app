import { DECREMENT, INCREMENT, RESET, } from "../actions/index.js";
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state+action.payload;
            // return {...state, count1 : count1+1};
        case DECREMENT:
            return state + action.payload;
        case RESET:
            return state = action.payload;
        default:
            return state;
    }
};

export default counterReducer;