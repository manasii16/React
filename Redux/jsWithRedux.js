import { createStore } from 'redux';

const initialState = {
    score: 0,
};

const ADD_SCORE = 'ADD_SCORE';
const DEDUCT_SCORE = 'DEDUCT_SCORE';

// actions
const action_add=(points)=>({
    type: ADD_SCORE,
    payload: points,
});

const action_deduct =(points)=>({
    type: DEDUCT_SCORE,
    payload: points,
});

//reducer
const reducer =(state = initialState, action)=>{
    switch (action.type) {
        case ADD_SCORE:
            return {
                ...state,
                score: state.score + action.payload,
            };
        case DEDUCT_SCORE:
            return {
                ...state,
                score: state.score - action.payload, 
            };
        default:
            return state;
    }
};

// Create store
const store = createStore(reducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

//dispatch actions
store.dispatch(action_add(500));
store.dispatch(action_add(200));
store.dispatch(action_deduct(100));
store.dispatch(action_deduct(500));
store.dispatch(action_add(300));

unsubscribe();