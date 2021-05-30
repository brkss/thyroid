import React from 'react';
import { BrowserRouter, Switch, Route, RouteComponentProps} from 'react-router-dom';
import { routes } from './config/routes';

export const Application : React.FC = () => {
    //

    console.log('router => ', routes);

    return(
        <>
            <BrowserRouter>
                <Switch>
                    {
                        routes.map((route, key) => {

                            return <Route key={key} path={route.path} exact={route.exact} render={(props: RouteComponentProps) => {
                                return <route.component {...props} {...route.props} name={route.name} />
                            }} />
                        })
                    }
                </Switch>
            </BrowserRouter>
        </>
    );
}