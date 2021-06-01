import React from 'react';
import { Redirect } from 'react-router';
import { getAccessToken } from '../helpers/constants/token';
import { Route, RouteComponentProps } from 'react-router-dom';
import { IRoute } from '../helpers/types/Route';

interface Props {
    route: IRoute
}

export const GuardRoute : React.FC<Props> = ({route}) => {

    if(getAccessToken() === ''){
        return <Redirect to='/auth/login' />
    }
    return <Route path={route.path} exact={route.exact} render={(props: RouteComponentProps) => {
        return <route.component {...props} {...route.props} name={route.name} />
    }} />

}