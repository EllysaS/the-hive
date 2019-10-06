import styles from './styles';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { history } from './app/utils';
import { routes } from './app/constants';
import store from './app/store';

import { 
    MainNav, 
    Home,
    SOME_COMPONENT 
} from './app/components';

render((
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route path={routes.ANOTHER_PATH} component={MainNav} />
                <Switch>
                    <Route path={routes.HOME} exact={true} component={Home} />
                    <Route path={routes.ANOTHER_PATH} exact={true} component={SOME_COMPONENT} />
                </Switch>
            </div>
        </Router>
    </Provider>
), document.getElementById('app'));