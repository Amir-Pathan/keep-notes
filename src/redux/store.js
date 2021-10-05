import {createStore,applyMiddleware} from 'redux'
import Logger from 'redux-logger'
import thunk from 'redux-thunk'
import {reducer} from './store/reducer'

const store = createStore(reducer,applyMiddleware(Logger,thunk))

export default store