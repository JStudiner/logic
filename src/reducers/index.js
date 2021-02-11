import { combineReducers } from 'redux';
import map from './gridReducers';
import arrow from './arrowReducer';
import code from './codeReducer';
export default combineReducers({
	map: map,
	arrow: arrow,
	code: code,
});
