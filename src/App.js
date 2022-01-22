import React, { Component } from 'react'
import './App.css';
import Login from './components/logins/Login';
import CashierLogin from './components/logins/CashierLogin';
import SideBar from './components/SideBar';
import ErrorPage from './components/ErrorPage';
import CashierDashboard from './components/CashierDashboard/Dashboard'
import test from './test'
import { Provider } from 'react-redux'
import store from './Store'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";





export default class App extends Component {


  render() {
    return (
      <>
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/dashboard" component={SideBar} />
              <Route path="/CashierDashboard" component={CashierDashboard} />
              <Route path="/test" exact component={test} />
              <Route path="/cashier" component={CashierLogin} />
              <Route component={ErrorPage} />

            </Switch>
          </BrowserRouter>
        </Provider>


      </>
    )
  }
}
