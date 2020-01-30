import React from 'react'

import Products from './Products'
import Details from './Details'

import { Switch, Route } from 'react-router-dom'

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Products} />
            <Route path='/details/:id' component={Details} />
        </Switch>
    )
}