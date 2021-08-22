import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';


// surveyRuducer Map
// let survey = {
//     feeling: '0',
//     understanding: '0',
//     support: '0',
//     comments: ''
// };

const surveyReducer = ( state = {}, action ) => {
    switch (action.type) {
        case 'ADD_FEELINGS':
            return { ...state, feeling: action.payload }
            //state.feeling = action.payload;
            break;
    
        case 'ADD_UNDERSTANDING':
            return { ...state, understanding: action.payload }
            //state.understanding = action.payload;
            break;

        case 'ADD_SUPPORTED':
            return { ...state, support: action.payload }
            //state.support = action.payload;
            break;

        case 'ADD_COMMENTS':
            return { ...state, comments: action.payload }
            //state.comments = action.payload;
            break;

        case 'RESET_SURVEY':
            return {}
            
        default:
            break;
    }

    return state;
}

const storeInstance = createStore(
    combineReducers({
        surveyReducer,
    })
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
