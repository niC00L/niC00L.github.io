import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Api from '../../services/Api/Api';
import styles from './Menu.css';

export class Menu extends Component {
    items = Api.menu;
    render() {
        return (
            <div className="Menu">
                {this.items.map(function (item) {
                    return (
                        <Link key={item.key} className={styles.button} to={'/'+item.slug}>{item.title}</Link>
                    );
                })}
            </div>
        );
    }
}

