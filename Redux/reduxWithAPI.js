import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import { thunk } from 'redux-thunk';
// import {saga} from 'redux-saga'

const FETCH_REQUEST ='FETCH_REQUEST';
const FETCH_SUCCESS ='FETCH_SUCCESS';
const FETCH_FAILURE ='FETCH_FAILURE';
const API_URL ='http://jsonplaceholder.typicode.com/posts/?_limit=10';

const initialState={
  loading: false,
  posts: [],
  error: ''
};

//actions
const fetch_request =()=>(
    { 
        type: FETCH_REQUEST 
    }
);
const fetch_success=(posts)=>(
    { 
        type: FETCH_SUCCESS, 
        payload: posts
    }
  );
const fetch_failure=(error)=>(
    { 
    type: FETCH_FAILURE, 
    payload: error     
});

//
// const fetch_posts_data =()=> {
//     store.dispatch(fetch_request()),

//     axios.get(API_URL)
//     .then((res) =>{
//       store.dispatch(fetch_success(res.data));
//       // console.log(res.data);

//     })
//     .catch((err) =>{
//       store.dispatch(fetch_failure(err.message));
//     })
// };

const fetch_posts_data =()=> {
  return(dispatch)=>{
    dispatch(fetch_request()),

    axios.get(API_URL)

    .then((res) =>{
      dispatch(fetch_success(res.data));
      // console.log(res.data);
    })
    .catch((err) =>{
      dispatch(fetch_failure(err.message));
    })
  };
};

//reducer
const apiReducer = (state=initialState, action) =>{
  switch (action.type){

    case FETCH_REQUEST:
      return{ 
        ...state, 
        loading: true 
    };

    case FETCH_SUCCESS:
      return{ 
        loading: false, 
        posts: action.payload, 
        error: '' 
    };

    case FETCH_FAILURE:
      return{ 
        loading: false, 
        error: action.payload,
        posts: [],  
    };

    default:
      return state;
  }
};

const store = createStore(apiReducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetch_posts_data());
// fetch_posts_data();
