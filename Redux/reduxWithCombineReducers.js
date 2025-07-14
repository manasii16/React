import { createStore, combineReducers } from 'redux';

const initial_add_state = {
    add_score: 0,
};

const initial_deduct_state = {
    deduct_score: 50,
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

//reducers
const reducer_add = (state = initial_add_state, action) => {
    switch (action.type) {
        case ADD_SCORE:
            return {
                ...state,
                add_score: state.add_score + action.payload,
            };

        default:
            return state;
    }
};

const reducer_deduct = (state = initial_deduct_state, action) => {
    switch (action.type) {
        case DEDUCT_SCORE:
            return {
                ...state,
                deduct_score: state.deduct_score - action.payload, 
            };
        default:
            return state;
    }
};

//Reducer
const rootReducer = combineReducers({
    add: reducer_add,
    deduct: reducer_deduct,
});

//Store
const store = createStore(rootReducer);

const unsubscribe = store.subscribe(() =>{
    console.log(store.getState());
});

//dispatch actions
store.dispatch(action_add(10));
store.dispatch(action_add(50));
store.dispatch(action_deduct(30));
store.dispatch(action_add(70));
store.dispatch(action_deduct(10));

unsubscribe();
