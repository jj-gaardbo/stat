import React from 'react'
import {withStyles} from "material-ui/styles/index";

const styles = theme => ({
    divider: {
        width: '100%',
        marginTop: 20,
        marginBottom: 20
    }
});

class OverviewContainer extends React.Component {
    constructor() {
        super();
    }

    render() {
        const {classes} = this.props;
        return (
            <div>

                Overview

            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(OverviewContainer)
