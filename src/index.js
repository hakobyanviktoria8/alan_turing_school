import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// Redux OQS start
import { Provider } from 'react-redux';
import { rootReducer }  from "./redux/rootReducer";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
//OQS end

ReactDOM.render(
    <Provider store={store}> {/*OSQ start*/}
        <App />
    </Provider>
  , document.getElementById('root')
);

