import React from 'react';
import PropTypes from 'prop-types';

export class Events extends React.Component {
    constructor(props) {
        super();
        // Create the age property in order to be accessible to onMakeOlder method
        // this.age = props.age;
        // Instead of assigning the value to a new variable we need to change the state of the variable
        this.state = {
            // Props are not assigned to states, because only the initial value will be stored. 
            // age: props.age
            // But that is what we want, so to avoid confussion we can write instead
            age: props.initialAge,
            // We create another property just for completeness
            status: 0,
            homeLink: props.initialLinkName
        };
        // Change the status value after 3sec
        setTimeout(() => {
            this.setState({
                status: 1
            });
        }, 3000);
    }

    // Execute this method when we click a button
    onMakeOlder() {
        // this.age += 3
        // console.log(this.age)
        // To change a state we use
        this.setState ({
            age: this.state.age + 3
        });
    }

    onChangeLink() {
        this.props.changeLink(this.state.homeLink);
    }

    onHandleChange(event) {
        this.setState({
            homeLink: event.target.value
        });
    }

    render () {
        return (
            <div>
                {/* As defined in the constructor there is no need to call this.props.age, but instead, just this.age */}
                <p>Hello, {this.props.name}! Your age is {this.state.age}</p>
                <p>Status: {this.state.status}</p>
                <hr/>
                {/* Several ways to call method onClick:
                1. this.onMakeOlder.bind(this): we use the bind(this) because this. referes to the instace that made the button click and the value will not be updated
                2. the arrow function: () => this.onMakeOlder(), but in this case will not work either because the state will not have changed */}
                <button className="btn btn-primary" onClick={() => this.onMakeOlder()}>Make me older!</button>
                <hr/>
                <input type="text" 
                       value={this.state.homeLink} 
                       onChange={(event) => this.onHandleChange(event)}/>
                <button className="btn btn-primary" onClick={() => this.onChangeLink()}>Change Header Link</button>
            </div>
        );
    }
}

Events.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number,
    initialLinkName: PropTypes.string
};
