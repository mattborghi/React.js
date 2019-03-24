import React from 'react';

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
                        {this.props.user.hobbies.map((hobby) => <li>{hobby}</li>)}
                    </ul>
                </div>
            </div>
        ); 
    }
}