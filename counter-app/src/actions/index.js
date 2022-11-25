export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

export const increment = () => {
    return {
        type: INCREMENT,
        payload: 1,
    };
};
// export const increment = (type, payload) => {
//     return {
//         type: INCREMENT,
//         payload: payload
//     };
// };
export const decrement = () => {
    return {
        type: DECREMENT,
        payload: -1,
    };
};

export const reset = () => {
    return {
        type: RESET,
        payload: 0,
    };
};