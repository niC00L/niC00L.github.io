/**
 * Created by niC00L on 24/10/17.
 */
import React, {Component} from 'react';
import Api from '../../api';

export class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        this.setState({projects: Api.get("projects", "en")});
        console.log(this.state.projects);
    }

    render() {
        console.log("THIS:", this.state.projects);
        return (
            <div className="Portfolio">

            </div>
        );
    }
}

