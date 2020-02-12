import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import 'animate.css'
import loadable from './utils/loadable';
import './style/base.scss';
import './style/App.scss';
 //import logo from './logo.svg';

// 公共模块
//const DefaultLayout = loading(() => import('./containers'));<Route component={DefaultLayout} />

// 基础页面
const Login = loadable(() => import('./views/Login'));

const App = () => (
    <Router>
        <Switch>
            <Route path='/' exact render={() => <Redirect to='/index' />} />
            <Route path='/login' component={Login} />
            
        </Switch>
    </Router>
)

export default App;
