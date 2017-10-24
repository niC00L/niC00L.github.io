import React, {Component} from 'react';
import '../../App.css';
import {Menu} from '../Menu/Menu';
import {Portfolio} from '../Portfolio/Portfolio';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {key: 0, slug: 'home', title: 'Home'},
                {key: 1, slug: 'about', title: 'About'},
                {key: 2, slug: 'portfolio', title: 'Portfolio'},
                {key: 3, slug: 'blog', title: 'Blog'},
                {key: 4, slug: 'contact', title: 'Contact'}
            ],
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
        console.log(this.props.location);
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">They are not rocks! They are minerals</h1>
                    <Menu items={this.state.items}/>
                </header>
                <Portfolio projects={this.state.projects}/>
            </div>
        );
    }
}

export default App;
