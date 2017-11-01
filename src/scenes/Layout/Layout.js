/**
 * Created by niC00L on 24/10/17.
 */

import React, {Component} from 'react';
import {Menu} from '../../components/Menu/Menu';
import {Home} from '../Home/Home';
import {Portfolio} from '../Portfolio/Portfolio';
import {Contact} from '../Contact/Contact';
import {About} from '../About/About';
import {Project} from '../../components/Project/Project';
import {Switch, Route} from 'react-router-dom'
export class Layout extends Component {
    render() {
        return (
            <div className="Layout">
                <header className="App-header">
                    <h1 className="App-title">They are not rocks! They are minerals</h1>
                    <Menu/>
                </header>
                <div className="Content">
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/home' component={Home}/>
                        <Route path='/portfolio' component={Portfolio}/>
                        <Route path='/about' component={About}/>
                        <Route path='/contact' component={Contact}/>
                        <Route path='/blog' component={Home}/>
                        <Route path='/portfolio/:project' component={Project}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

