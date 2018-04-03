import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Drawer from "material-ui/es/Drawer/Drawer";
import {Badge, List, ListItemIcon, ListItemText, MenuItem} from "material-ui";
import {Link} from 'react-router-dom'
import {Close} from "material-ui-icons";

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class HeaderBar extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            isMenuOpen : false
        };

    }

    toggleMenu() {
        if(this.state.isMenuOpen){
            this.setState({isMenuOpen : false});
        } else {
            this.setState({isMenuOpen : true});
        }

    }

    static propTypes : {
        classes: PropTypes.object,
    };

    render (){
        const {classes, theme} = this.props;

        const drawer = (
            <div>
                <IconButton onClick={() => this.toggleMenu()} className={"theme-white-text close-button"} aria-label="Menu">
                    <Close/>
                </IconButton>
                <List role={"menu"}>
                    <MenuItem to="/overview">
                        <ListItemText primary="Overview"/>
                    </MenuItem>
                </List>
            </div>
        );

        return(
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton onClick={() => this.toggleMenu()} className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Progress
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    open={this.state.isMenuOpen}
                >
                    {drawer}
                </Drawer>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(HeaderBar);
