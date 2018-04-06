import React, { Component } from 'react';
import {
    AppBar, CssBaseline, Drawer, IconButton, List, ListItemText, MenuItem, Paper, Toolbar,
    Typography
} from "material-ui";
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import HeaderBar from "./components/HeaderBar.jsx";
import {
    BrowserRouter as Router,
    Route, Switch
} from 'react-router-dom';
import './assets/scss/app.scss';

import OverviewContainer from "./containers/OverviewContainer.jsx";
import Container from "./containers/Container.jsx";

const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

export default class App extends Component {

    constructor(props){
        super(props);
    }

    render() {

        const drawer = (
            <div>
                <List role={"menu"}>
                    <MenuItem to="/overview">
                        <ListItemText primary="Overview"/>
                    </MenuItem>

                    <MenuItem to="/container">
                        <ListItemText primary="Container"/>
                    </MenuItem>
                </List>
            </div>
        );

        return (
            <Router>
                <MuiThemeProvider theme={theme}>
                    <div className="App">
                        <Paper>

                            <CssBaseline/>

                            <HeaderBar className={"app-bar"} />

                            <Drawer variant="permanent" className={"drawer"}>
                                {drawer}
                            </Drawer>

                            <Switch>
                                <Route exact path='/' component={OverviewContainer}/>
                                <Route exact path='/container' component={Container}/>
                            </Switch>

                        </Paper>
                    </div>
                </MuiThemeProvider>
            </Router>
        );
    }
}
