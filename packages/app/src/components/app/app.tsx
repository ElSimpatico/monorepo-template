import React, { ReactElement } from 'react';
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';

import { ThemeProvider } from 'ui-core';

import { ROUTES, Route as AppRoute } from '@shared/routes';

export function App(): ReactElement<{}> {
    return (
        <ThemeProvider theme={'light'}>
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
        </ThemeProvider>
    );
}
