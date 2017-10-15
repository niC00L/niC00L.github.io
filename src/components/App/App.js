import React, {Component} from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import {Menu} from '../Menu/Menu';
import {Project} from '../Project/Project';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {slug: 'home', title: 'Home'},
                {slug: 'about', title: 'About'}
            ],
            project: {
                titleImage: {src: './img/image.jpg', alt: 'testImage'},
                headline: "Headline",
                text: "This is sample whatever"
            }
        };
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">They are not rocks! They are minerals</h1>
                    <Menu items={this.state.items}/>
                </header>
                <p className="App-intro">
                    <Project headline={this.state.project.headline} titleImage={this.state.project.titleImage}
                             text={this.state.project.text}/>
                </p>
            </div>
        );
    }
}

export default App;
