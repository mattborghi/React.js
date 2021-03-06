import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component {
    render () {
        console.log('Home props: ' + this.props)
        return (
            <div>
                <p>Hello, {this.props.name}!</p>
                <p>Your age is {this.props.user.age}</p>
                <div>
                    <h4>Hoobies</h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                    </ul>
                </div>
                {/* Print an horizontal line and the Home children, that is what is inside the 
                <Home> and <Home/> tags. */}
                <hr/>
                {this.props.children}
                {/* Button that calls a function that is defined in the parent method */}
                <button className="btn btn-primary" onClick={this.props.greet}>Greet</button>
                <hr/>
            </div>
        );
    }
}

// Define propTypes of a certain class to tell JS what type of value to expect
Home.propTypes = {
    name: PropTypes.string,
    user: PropTypes.object,
    greet: PropTypes.func
    // children: PropTypes.element.isNotRequired
};
