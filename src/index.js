import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// let survey = {
//     feelings: '0',
//     understanding: '0',
//     supported: '0',
//     comments: ''
// };

const surveyReducer = ( state = {}, action ) => {
    switch (action.type) {
        case 'ADD_FEELINGS':
            state.feelings = action.payload;
            break;
    
        case 'ADD_UNDERSTANDING':
            state.understanding = action.payload;
            break;
            
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
