/**
 * Created by niC00L on 24/10/17.
 */
import React, {Component} from 'react';

export class Portfolio extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Portfolio">
                {this.props.projects.map(function (project) {
                    return (
                        <div className="pes">
                            <a key={project.slug} href={'/project/' + project.slug}>{project.title}</a>
                        </div>
                    );
                })}
            </div>
        );
    }
}

