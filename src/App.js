import React from "react";
import Weather from "./components/Weather";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducers from  "../src/reducers/index";

let store = createStore(reducers, applyMiddleware(thunk));

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Weather/>
            </Provider>
        </div>
    );
}

export default App;
