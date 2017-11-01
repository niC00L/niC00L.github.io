import React, {Component} from 'react';
import 'css/App.css';
import {Layout} from './scenes/Layout/Layout';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            static_pages: [],
            blog: []
        };
    }

    loadData(folder, lang) {
        fetch('/json/' + folder + '/' + lang + '.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    projects: data
                })
            });
    }

    componentDidMount() {
        this.loadData("projects", "en");
    }

    render() {
        return (
            <BrowserRouter>
                <Layout items={this.state.items} projects={this.state.projects}/>
            </BrowserRouter>
        );
    }
}

export default App;
