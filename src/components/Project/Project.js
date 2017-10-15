import React, {Component} from 'react';

export class Project extends Component {
    render() {
        return (
            <div className="Project">
                <h1>{this.props.headline}</h1>
                <img src={this.props.titleImage.src} alt={this.props.titleImage.alt}/>
                <p>{this.props.text}</p>
                <div className="Gallery"></div>
            </div>
        );
    }
}