'use strict';

import { applyMiddleware, createStore } from 'redux';
import reducers from '../reducers/index';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
export default createStoreWithMiddleware(reducers);
