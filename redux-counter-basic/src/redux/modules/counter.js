// action value
const PLUS_ONE = "PLUS_ONE";
const MINUS_ONE = "MINUS_ONE";
const PLUS_N = "counter/PLUS_N";
const MINUS_N = "counter/MINUS_N";

// action creator : action value를 리턴하는 함수
export const plusOne = (() => {
    return {
        type: PLUS_ONE,
    }
});

export const minusOne = (() => {
    return {
        type: MINUS_ONE,
    }
});

export const plusN = (payload) => {
    return {
        type: PLUS_N,
        payload
    }
};

export const minusN = (payload) => {
    return {
        type: MINUS_N,
        payload
    }
};

// 초기 상태값(state)
// const [number, setNmber] = useState(0);
const initialState = {
    number: 0
}

// 리듀서 : 'state에 변화를 일으키는' 함수
// 1. state를 action의 type에 따라 변경하는 함수
// input : state와 action
// action 객체라는 것은 action type을 payload만큼 처리하는 것이다!
// ex : payload가 3이다. 3만큼 plus
const counter = (state = initialState, action) => {
    // console.log(state);
    switch (action.type) {
        case PLUS_ONE:
            return {
                number: state.number + 1,
            };
        case MINUS_ONE:
            return {
                number: state.number - 1,
            };
        case PLUS_N:
            return {
                number: state.number + action.payload
            };
        case MINUS_N:
            return {
                number: state.number - action.payload
            };
        default:
            return state;
    }
}

export default counter;