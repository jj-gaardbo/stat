import React from 'react'
import {withStyles} from "material-ui/styles/index";

const styles = theme => ({

});

class Container extends React.Component {
    constructor() {
        super();
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={"content"}>

                <h1>NEW</h1>

            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(Container)
