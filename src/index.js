import React from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss';

function App() {
    return (
        <div className="main-content">
            Hello World
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("app"));