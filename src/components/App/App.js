import React, {Component} from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import {Menu} from '../Menu/Menu';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {slug: 'home', title: 'Home'},
                {slug: 'about', title: 'About'}
            ]
        };
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">They are not rocks! They are minerals</h1>
                    <Menu items={this.state.items}/>
                </header>
                <p className="App-intro">
                    So this is how ReactJS works.
                </p>
            </div>
        );
    }
}

export default App;
