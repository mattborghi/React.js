// This is a new component we are going to create
// We dont need to import react dom beacuse we are not going to associate with any html alement 
// It is going to be imported to be used by another react component
import React from 'react';

// export class Header extends React.Component {
// Refactor the Header to a stateless component as it does not modify the state
export const Header = (props) => {
    // render () { 
        return (
            <nav className="navbar navbar-default navbar-light bg-light ">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><a href="http://www.google.com">{props.homeLink}</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    // }
};
