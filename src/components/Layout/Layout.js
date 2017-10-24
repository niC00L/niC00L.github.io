/**
 * Created by niC00L on 24/10/17.
 */

import React, {Component} from 'react';
import {Menu} from '../Menu/Menu';
import Content from '../Content/Content';

export class Layout extends Component {
    render() {
        return (
            <div className="Layout">
                <header className="App-header">
                    <h1 className="App-title">They are not rocks! They are minerals</h1>
                    <Menu/>
                </header>
                <div className="Content">
                    <Content/>
                </div>
            </div>
        );
    }
}

