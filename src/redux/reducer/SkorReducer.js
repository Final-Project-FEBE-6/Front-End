const INCREMENT_SKOR = "INCREMENT_SKOR";

export function increment_skor (skor) {
    return {
        type : INCREMENT_SKOR,
        payload: {
            skor,
        },
    };
}

const initialState = {
    skor : 0,
}

function SkorReducer(state = initialState, action){
    switch (action.type) {
        case INCREMENT_SKOR:
            return {
                ...state,
                skor: state.skor + action.payload.skor,
            };
        default:
            return state;
    }
}

export default SkorReducer