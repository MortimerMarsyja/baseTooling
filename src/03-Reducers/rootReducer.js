//Deps
import {combineReducers} from 'redux';

import {addCountReducer} from './addCountReducer';


export default combineReducers({
    count:addCountReducer,
})
  
  