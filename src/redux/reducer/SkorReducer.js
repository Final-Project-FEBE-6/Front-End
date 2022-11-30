const INCREMENT_SKOR = "INCREMENT_SKOR";

export function increment_skor (skor) {
    return {
        type : INCREMENT_SKOR,
        payload: {
            skor,
        },
    };
}


// const INCREMENT_SKOR_1 = "INCREMENT_SKOR_1"
// const INCREMENT_SKOR_2 = "INCREMENT_SKOR_2"
// const INCREMENT_SKOR_3 = "INCREMENT_SKOR_3"
// const INCREMENT_SKOR_4 = "INCREMENT_SKOR_4"
// const INCREMENT_SKOR_5 = "INCREMENT_SKOR_5"


// export function increment_1 (){
//     return {
//         type : INCREMENT_SKOR_1
//     }
// }
// export function increment_2 (){
//     return {
//         type : INCREMENT_SKOR_2
//     }
// }
// export function increment_3 (){
//     return {
//         type : INCREMENT_SKOR_3
//     }
// }
// export function increment_4 (){
//     return {
//         type : INCREMENT_SKOR_4
//     }
// }
// export function increment_5 (){
//     return {
//         type : INCREMENT_SKOR_5
//     }
// }

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
        // case INCREMENT_SKOR_1 :
        //     return {
        //         skor : state.skor + 1
        //     }
        // case INCREMENT_SKOR_2 :
        //     return {
        //         skor : state.skor + 2
        //     }
        // case INCREMENT_SKOR_3 :
        //     return {
        //         skor : state.skor + 3
        //     }
        // case INCREMENT_SKOR_4 :
        //     return {
        //         skor : state.skor + 4
        //     }
        // case INCREMENT_SKOR_5 :
        //     return {
        //         skor : state.skor + 5
        //     }
        default:
            return state;
    }
}

export default SkorReducer