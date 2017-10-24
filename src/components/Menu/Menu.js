import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Api from '../../api';

export class Menu extends Component {
    items = Api.menu;
    render() {
        return (
            <div className="Menu">
                {this.items.map(function (item) {
                    return (
                        <Link key={item.key} className="menuButton" to={'/'+item.slug}>{item.title}</Link>
                    );
                })}
            </div>
        );
    }
}

