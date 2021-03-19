import React, { ReactElement } from 'react';
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';

import { ROUTES, Route as AppRoute } from '@shared/routes';

export function App(): ReactElement<{}> {
    return (
        <BrowserRouter>
            <Switch>
                {ROUTES.map((route: AppRoute) => (
                    <Route
                        key={route.key}
                        path={route.path}
                        exact={route.path === '/'}
                        render={(props) => <route.component {...props} />}
                    ></Route>
                ))}
            </Switch>
        </BrowserRouter>
    );
}
