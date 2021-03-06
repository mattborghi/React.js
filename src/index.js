import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { Events } from './Components/Events';

class MyClass extends React.Component {
    // Define the constructor in order to change the homeLink value to the Header
    constructor() {
        super();
        this.state = {
            homeLink: "Home",
            homeMounted: true
        };
    }
    
    // I want to pass this function to a child component (Hello) 
    onGreet() {
        alert("Hello");
    }

    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName
        });
    }

    onChangeHomeMounted() {
        this.setState({
            homeMounted: !this.state.homeMounted
        });
    }

    render () {
        // Only render the event component if the state of homemounted is true
        // The component can be changed by using a button
        let homeCmp = "";
        if (this.state.homeMounted) {
            homeCmp = (
                <Events 
                    name={"Matias"} 
                    initialAge={27}
                    changeLink={(newName) => this.onChangeLinkName(newName)}
                    initialLinkName = {this.state.homeLink}
                />
            );
        }
        var user = {
            hobbies: ['football', 'swimming', 'violin'],
            age: 27
        };
        return(
            <div className="container">
                <div className="row">
                    {/* Just add bootstrap stuff */}
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>
                <div className="row">
                    {/* Just add bootstrap stuff */}
                    <div className="col-xs-10 col-xs-offset-1">
                        {/* Passing name and user props to Home.
                        User is passed by defining the variable user above */}
                        <Home name={"Matias"} 
                              user={user} 
                              greet={this.onGreet}
                              />
                        {/* Passing empty props to Home instead */}
                        {/* <Home/> */}
                        <Home name={"Sth"} user={user} greet={this.onGreet}>
                          <p>Paragraph passed through children method</p>
                        </Home>
                    </div>
                </div>
                {/* Another row when we test events */}
                <div className="row">
                    {/* Just add bootstrap stuff */}
                    <div className="col-xs-10 col-xs-offset-1">
                        {homeCmp}
                    </div>
                </div>
                <div className="row">
                    {/* Just add bootstrap stuff */}
                    <div className="col-xs-10 col-xs-offset-1">
                        <button className="btn btn-primary" onClick={() => this.onChangeHomeMounted()}>(Un)Mount Event Component</button>
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
