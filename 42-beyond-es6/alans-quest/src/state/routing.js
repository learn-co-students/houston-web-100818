import React from 'react'
import { Route } from 'react-router'
import createHistory from 'history/createBrowserHistory'

export const history = createHistory()

export const route = function(path){
    return descriptor => {
        descriptor.finisher = component => {
            return class RoutedComponet extends React.Component {
                render(){
                    return <Route exact={true} path={path} component={component} />
                }
            }
        }
        return descriptor
    }
}
