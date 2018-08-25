import {combineReducers} from 'redux';
import records from './records';
//import {average} from './average';
const rootReducer=combineReducers({
    records,
   // average
});
export default rootReducer;