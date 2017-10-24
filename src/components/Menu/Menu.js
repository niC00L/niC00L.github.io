import React, {Component} from 'react';

export class Menu extends Component {
    render() {
        return (
            <div className="Menu">
                {this.props.items.map(function (item) {
                    return (
                        <a key={item.key} className="menuButton" href={'/'+item.slug}>{item.title}</a>
                    );
                })}
            </div>
        );
    }
}

