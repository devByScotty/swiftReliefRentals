import { legacy_createStore,applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { carsReducer } from './Reducers/carsReducer';
import { alertsReducer } from './Reducers/alertReducer';
import { bookingsReducer }  from './Reducers/bookingReducer';
import { usersReducer }  from './Reducers/usersReducer';



const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

const rootReducer = combineReducers({
    carsReducer,
    alertsReducer,
    bookingsReducer,
    usersReducer
    
});

const store = legacy_createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);

export default store;