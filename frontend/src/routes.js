import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import UpdateDev from './pages/Update'
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path='/update' component={UpdateDev} />
            </Switch>
        </BrowserRouter>
    )
}