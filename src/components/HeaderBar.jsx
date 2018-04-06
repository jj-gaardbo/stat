import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

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
    }

    static propTypes : {
        classes: PropTypes.object,
    };

    render (){
        const {classes, theme} = this.props;

        return(
            <AppBar className={'app-bar'}>
                <Toolbar>

                    <Typography variant="title" color="inherit" className={classes.flex}>
                        Progress
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles, {withTheme: true})(HeaderBar);
