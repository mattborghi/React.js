import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { Events } from './Components/Events';

class MyClass extends React.Component {
    render () {
        var user = {
            hobbies: ['football', 'swimming', 'violin'],
            age: 27
        };
        return(
            <div className="container">
                <div className="row">
                    {/* Just add bootstrap stuff */}
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    {/* Just add bootstrap stuff */}
                    <div className="col-xs-10 col-xs-offset-1">
                        {/* Passing name and user props to Home.
                        User is passed by defining the variable user above */}
                        <Home name={"Matias"} user={user}/>
                        {/* Passing empty props to Home instead */}
                        {/* <Home/> */}
                        <Home name={"Sth"} user={user}>
                          <p>Paragraph passed through children method</p>
                        </Home>
                    </div>
                </div>
                {/* Another row when we test events */}
                <div className="row">
                    {/* Just add bootstrap stuff */}
                    <div className="col-xs-10 col-xs-offset-1">
                        <Events name={"Matias"} initialAge={27}/>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<MyClass/>, window.document.getElementById('app'));

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
