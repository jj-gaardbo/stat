import React, { Component } from 'react';
import {AppBar, CssBaseline, Paper, Toolbar, Typography} from "material-ui";
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import HeaderBar from "./components/HeaderBar.jsx";
import {BrowserRouter, Route} from "react-router-dom";
import OverviewContainer from "./containers/OverviewContainer.jsx";

const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

export default class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div className="App">
                    <Paper>

                        <CssBaseline/>

                        <HeaderBar />

                        <BrowserRouter>
                            <Route exact path='/overview' component={OverviewContainer}/>
                        </BrowserRouter>

                    </Paper>
                </div>
            </MuiThemeProvider>
        );
    }
}
