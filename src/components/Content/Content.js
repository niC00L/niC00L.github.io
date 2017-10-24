/**
 * Created by niC00L on 24/10/17.
 */
import React, {Component} from 'react';
import {Home} from '../Home/Home';
import {Portfolio} from '../Portfolio/Portfolio';
import {Contact} from '../Contact/Contact';
import {About} from '../About/About';
import {Project} from '../Project/Project';
import {Switch, Route} from 'react-router-dom'

const Content = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/home' component={Home}/>
            <Route path='/portfolio' component={Portfolio}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/blog' component={Home}/>
            <Route path='/portfolio/:project' component={Project}/>
        </Switch>
    </main>
);

export default Content;